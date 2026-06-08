import { z } from "zod";
import { BaseModelSchema } from "../../base.schema";

/**
 * @fileoverview Modifier schema definitions for business management.
 * @module business-mgt/modifier
 *
 * Includes modifier groups, options, bindings, and applied modifiers
 * for menu item customization (e.g., sizes, add-ons, toppings).
 */

// ============================================================================
// CHANNEL MAPPING SCHEMAS
// ============================================================================

/**
 * Modifier group channel mapping schema.
 * Maps modifier groups to external platform identifiers.
 *
 * @typedef {Object} ModifierGroupChannelMapping
 * @property {string} channelId - Channel identifier (e.g., doordash, uber-eats)
 * @property {string} externalModifierGroupId - External modifier group ID for synchronization
 */
export const ModifierGroupChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalModifierGroupId: z.string().describe("External modifier group ID for this specific channel"),
}).describe("Per-channel external modifier group ID mapping");

/**
 * Modifier option channel mapping schema.
 * Maps modifier options to external platform identifiers.
 *
 * @typedef {Object} ModifierOptionChannelMapping
 * @property {string} channelId - Channel identifier (e.g., doordash, uber-eats)
 * @property {string} externalModifierOptionId - External modifier option ID for synchronization
 * @property {string} [externalModifierGroupId] - Optional external parent modifier group ID
 */
export const ModifierOptionChannelMappingSchema = z.object({
    channelId: z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalModifierOptionId: z.string().describe("External modifier option ID for this specific channel"),
    externalModifierGroupId: z.string().nullable().optional().describe("Optional external parent modifier group ID in this channel"),
}).describe("Per-channel external modifier option ID mapping");

// ============================================================================
// MODIFIER OPTION SCHEMA
// ============================================================================

/**
 * Modifier option schema.
 * Individual option within a modifier group.
 *
 * @typedef {Object} ModifierOption
 * @property {string} [modifierRevisionId] - Modifier revision ID for version-scoped data
 * @property {string} [locationId] - Location ID for location-specific modifiers
 * @property {string} modifierGroupId - Parent modifier group ID
 * @property {string} name - Modifier option name (e.g., Large, Extra Cheese)
 * @property {string} [description] - Modifier option description
 * @property {number} priceDelta - Price adjustment for selecting this option
 * @property {boolean} isDefault - Whether this is the default option
 * @property {number} displayOrder - Display order within the group
 * @property {ModifierOptionChannelMapping[]} [channelMappings] - Per-channel mappings
 * @property {boolean} isActive - Whether this option is active
 */
export const ModifierOptionSchema = BaseModelSchema.safeExtend({
    modifierRevisionId: z.string().nullable().optional().describe("Optional modifier revision ID for version-scoped data"),
    locationId: z.string().nullable().optional().describe("Location ID for location-specific modifiers"),
    modifierGroupId: z.string().describe("Parent modifier group ID"),
    name: z.string().min(1).describe("Modifier option name (e.g., Large, Extra Cheese)"),
    description: z.string().nullable().optional().describe("Modifier option description"),
    priceDelta: z.number().default(0).describe("Price adjustment for selecting this option"),
    isDefault: z.boolean().default(false).describe("Whether this is the default option"),
    displayOrder: z.number().int().nonnegative().default(0).describe("Display order within the group"),
    channelMappings: z.array(ModifierOptionChannelMappingSchema).nullable().optional().describe("Per-channel modifier option ID mappings"),
    isActive: z.boolean().default(true).describe("Whether this option is active"),
});

// ============================================================================
// MODIFIER GROUP SCHEMA
// ============================================================================

/**
 * Modifier group schema.
 * Group of related modifier options (e.g., Size, Add-ons, Toppings).
 *
 * @typedef {Object} ModifierGroup
 * @property {string} [modifierRevisionId] - Modifier revision ID for version-scoped data
 * @property {string} [locationId] - Location ID for location-specific modifiers
 * @property {string} name - Modifier group name (e.g., Size, Add-ons)
 * @property {string} [description] - Modifier group description
 * @property {ModifierOption[]} options - Modifier options within this group
 * @property {number} minSelection - Minimum number of options that must be selected
 * @property {number} [maxSelection] - Maximum number of options that can be selected
 * @property {boolean} isRequired - Whether selection from this group is required
 * @property {number} displayOrder - Display order in the menu
 * @property {ModifierGroupChannelMapping[]} [channelMappings] - Per-channel mappings
 * @property {boolean} isActive - Whether this group is active
 */
export const ModifierGroupSchema = BaseModelSchema.safeExtend({
    modifierRevisionId: z.string().nullable().optional().describe("Optional modifier revision ID for version-scoped data"),
    locationId: z.string().nullable().optional().describe("Location ID for location-specific modifiers"),
    name: z.string().min(1).describe("Modifier group name (e.g., Size, Add-ons)"),
    description: z.string().nullable().optional().describe("Modifier group description"),
    options: z.array(ModifierOptionSchema).min(1, "At least one modifier option is required").describe("Modifier options within this group"),
    minSelection: z.number().int().nonnegative().default(0).describe("Minimum number of options that must be selected"),
    maxSelection: z.number().int().positive().nullable().optional().describe("Maximum number of options that can be selected"),
    isRequired: z.boolean().default(false).describe("Whether selection from this group is required"),
    displayOrder: z.number().int().nonnegative().default(0).describe("Display order in the menu"),
    channelMappings: z.array(ModifierGroupChannelMappingSchema).nullable().optional().describe("Per-channel modifier group ID mappings"),
    isActive: z.boolean().default(true).describe("Whether this group is active"),
}).superRefine((data, ctx) => {
    if (data.maxSelection !== undefined && data.maxSelection !== null && data.maxSelection < data.minSelection) {
        ctx.addIssue({
            code: "custom",
            path: ["maxSelection"],
            message: "maxSelection must be greater than or equal to minSelection",
        });
    }
});

// ============================================================================
// BINDING SCHEMAS
// ============================================================================

/**
 * Modifier option override schema.
 * Per-option override within a binding.
 *
 * @typedef {Object} ModifierOptionOverride
 * @property {string} modifierOptionId - Target modifier option ID
 * @property {number} [priceDeltaOverride] - Override price delta
 * @property {boolean} [isDefaultOverride] - Override default selection
 * @property {number} [displayOrderOverride] - Override display order
 */
export const ModifierOptionOverrideSchema = z.object({
    modifierOptionId: z.string().describe("Target modifier option ID"),
    priceDeltaOverride: z.number().nullable().optional().describe("Override price delta"),
    isDefaultOverride: z.boolean().nullable().optional().describe("Override default selection"),
    displayOrderOverride: z.number().int().nullable().optional().describe("Override display order"),
}).describe("Per-option override within a binding");

/**
 * Item modifier binding schema.
 * Links modifier groups to menu items or sets.
 *
 * @typedef {Object} ItemModifierBinding
 * @property {string} [modifierRevisionId] - Modifier revision ID for version-scoped data
 * @property {string} [locationId] - Location ID for location-specific bindings
 * @property {string} [menuItemId] - Menu item ID target
 * @property {string} [menuItemVariantId] - Menu item variant ID target
 * @property {string} [menuSetId] - Menu set ID target
 * @property {string} modifierGroupId - Modifier group ID to bind
 * @property {boolean} [isRequiredOverride] - Override isRequired from modifier group
 * @property {number} [minSelectionOverride] - Override minSelection
 * @property {number} [maxSelectionOverride] - Override maxSelection
 * @property {string[]} [excludedOptionIds] - Option IDs to exclude from this binding
 * @property {ModifierOptionOverride[]} [optionOverrides] - Per-option overrides
 * @property {number} displayOrder - Display order
 * @property {boolean} isActive - Whether this binding is active
 */
export const ItemModifierBindingSchema = BaseModelSchema.safeExtend({
    modifierRevisionId: z.string().nullable().optional().describe("Optional modifier revision ID for version-scoped data"),
    locationId: z.string().nullable().optional().describe("Location ID for location-specific bindings"),
    menuItemId: z.string().nullable().optional().describe("Menu item ID target"),
    menuItemVariantId: z.string().nullable().optional().describe("Optional menu item variant ID target"),
    menuSetId: z.string().nullable().optional().describe("Optional menu set ID target"),
    modifierGroupId: z.string().describe("Modifier group ID to bind"),
    isRequiredOverride: z.boolean().nullable().optional().describe("Override isRequired from modifier group"),
    minSelectionOverride: z.number().int().nonnegative().nullable().optional().describe("Override minSelection"),
    maxSelectionOverride: z.number().int().positive().nullable().optional().describe("Override maxSelection"),
    excludedOptionIds: z.array(z.string()).nullable().optional().describe("Option IDs to exclude from this binding"),
    optionOverrides: z.array(ModifierOptionOverrideSchema).nullable().optional().describe("Per-option overrides for this binding"),
    displayOrder: z.number().int().nonnegative().default(0).describe("Display order"),
    isActive: z.boolean().default(true).describe("Whether this binding is active"),
}).superRefine((data, ctx) => {
    if (
        data.minSelectionOverride !== undefined &&
        data.minSelectionOverride !== null &&
        data.maxSelectionOverride !== undefined &&
        data.maxSelectionOverride !== null &&
        data.maxSelectionOverride < data.minSelectionOverride
    ) {
        ctx.addIssue({
            code: "custom",
            path: ["maxSelectionOverride"],
            message: "maxSelectionOverride must be greater than or equal to minSelectionOverride",
        });
    }

    const hasMenuItemTarget = !!data.menuItemId;
    const hasMenuSetTarget = !!data.menuSetId;

    if (hasMenuItemTarget === hasMenuSetTarget) {
        ctx.addIssue({
            code: "custom",
            path: ["menuItemId"],
            message: "Exactly one of menuItemId or menuSetId is required",
        });
    }

    if (data.menuItemVariantId && !hasMenuItemTarget) {
        ctx.addIssue({
            code: "custom",
            path: ["menuItemVariantId"],
            message: "menuItemVariantId can only be provided when menuItemId is set",
        });
    }
});

// ============================================================================
// APPLIED MODIFIER SCHEMA
// ============================================================================

/**
 * Applied modifier schema.
 * Modifier selected on an order item.
 *
 * @typedef {Object} AppliedModifier
 * @property {string} [modifierGroupId] - Internal modifier group ID
 * @property {string} [modifierOptionId] - Internal modifier option ID
 * @property {string} [externalModifierGroupId] - External modifier group ID
 * @property {string} [externalModifierOptionId] - External modifier option ID
 * @property {string} groupName - Modifier group name
 * @property {string} optionName - Modifier option name
 * @property {number} quantity - Quantity of this modifier
 * @property {number} priceDelta - Price adjustment for this modifier
 */
export const AppliedModifierSchema = z.object({
    modifierGroupId: z.string().nullable().optional().describe("Internal modifier group ID"),
    modifierOptionId: z.string().nullable().optional().describe("Internal modifier option ID"),
    externalModifierGroupId: z.string().nullable().optional().describe("External modifier group ID"),
    externalModifierOptionId: z.string().nullable().optional().describe("External modifier option ID"),
    groupName: z.string().min(1).describe("Modifier group name"),
    optionName: z.string().min(1).describe("Modifier option name"),
    quantity: z.number().int().positive().default(1).describe("Quantity of this modifier"),
    priceDelta: z.number().default(0).describe("Price adjustment for this modifier"),
});

// ============================================================================
// VIEW SCHEMAS
// ============================================================================

/**
 * Modifier option view schema.
 * Simplified view for display purposes.
 *
 * @typedef {Object} ModifierOptionView
 * @property {string} id - Modifier option ID
 * @property {string} name - Option name
 * @property {string} [description] - Option description
 * @property {number} priceDelta - Price adjustment
 * @property {boolean} isDefault - Whether this is the default option
 * @property {number} displayOrder - Display order
 * @property {ModifierOptionChannelMapping[]} [channelMappings] - Channel mappings
 * @property {boolean} isActive - Whether active
 */
export const ModifierOptionViewSchema = z.object({
    id: z.string().describe("Modifier option ID"),
    name: z.string().min(1).describe("Option name"),
    description: z.string().nullable().optional().describe("Option description"),
    priceDelta: z.number().default(0).describe("Price adjustment"),
    isDefault: z.boolean().default(false).describe("Whether this is the default option"),
    displayOrder: z.number().int().nonnegative().default(0).describe("Display order"),
    channelMappings: z.array(ModifierOptionChannelMappingSchema).nullable().optional().describe("Channel mappings"),
    isActive: z.boolean().default(true).describe("Whether active"),
});

/**
 * Modifier group view schema.
 * Simplified view for display purposes.
 *
 * @typedef {Object} ModifierGroupView
 * @property {string} id - Modifier group ID
 * @property {string} name - Group name
 * @property {string} [description] - Group description
 * @property {number} displayOrder - Display order
 * @property {ModifierGroupChannelMapping[]} [channelMappings] - Channel mappings
 * @property {boolean} isActive - Whether active
 * @property {boolean} isRequired - Whether required
 * @property {number} minSelection - Minimum selections
 * @property {number} [maxSelection] - Maximum selections
 * @property {ModifierOptionView[]} options - Options in this group
 */
export const ModifierGroupViewSchema = z.object({
    id: z.string().describe("Modifier group ID"),
    name: z.string().min(1).describe("Group name"),
    description: z.string().nullable().optional().describe("Group description"),
    displayOrder: z.number().int().nonnegative().default(0).describe("Display order"),
    channelMappings: z.array(ModifierGroupChannelMappingSchema).nullable().optional().describe("Channel mappings"),
    isActive: z.boolean().default(true).describe("Whether active"),
    isRequired: z.boolean().default(false).describe("Whether required"),
    minSelection: z.number().int().nonnegative().default(0).describe("Minimum selections"),
    maxSelection: z.number().int().positive().nullable().optional().describe("Maximum selections"),
    options: z.array(ModifierOptionViewSchema).default([]).describe("Options in this group"),
});

// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================

/**
 * Schema for creating a new modifier option.
 * Omits auto-generated fields.
 */
export const CreateModifierOptionSchema = ModifierOptionSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

export const CreateModifierGroupOptionSchema = CreateModifierOptionSchema.omit({
    modifierGroupId: true,
});

/**
 * Schema for creating a new modifier group.
 * Omits auto-generated fields.
 */
export const CreateModifierGroupSchema = ModifierGroupSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    options: true,
}).safeExtend({
    options: z.array(CreateModifierGroupOptionSchema).min(1, "At least one modifier option is required").describe("Modifier options within this group"),
}).superRefine((data, ctx) => {
    if (data.maxSelection !== undefined && data.maxSelection !== null && data.maxSelection > data.options.length) {
        ctx.addIssue({
            code: "custom",
            path: ["maxSelection"],
            message: "maxSelection cannot exceed the number of provided options",
        });
    }
});

/**
 * Schema for creating a new item modifier binding.
 * Omits auto-generated fields.
 */
export const CreateItemModifierBindingSchema = ItemModifierBindingSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

/**
 * Schema for updating an existing modifier option.
 * All fields optional except id (required).
 */
export const UpdateModifierOptionSchema = CreateModifierOptionSchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Schema for updating an existing modifier group.
 * All fields optional except id (required).
 */
export const UpdateModifierGroupSchema = CreateModifierGroupSchema.partial().safeExtend({
    id: z.string(),
});

/**
 * Schema for updating an existing item modifier binding.
 * All fields optional except id (required).
 */
export const UpdateItemModifierBindingSchema = CreateItemModifierBindingSchema.partial().safeExtend({
    id: z.string(),
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

// Type exports
export type ModifierOption = z.infer<typeof ModifierOptionSchema>;
export type ModifierGroup = z.infer<typeof ModifierGroupSchema>;
export type ModifierOptionOverride = z.infer<typeof ModifierOptionOverrideSchema>;
export type ItemModifierBinding = z.infer<typeof ItemModifierBindingSchema>;
export type AppliedModifier = z.infer<typeof AppliedModifierSchema>;
export type ModifierOptionView = z.infer<typeof ModifierOptionViewSchema>;
export type ModifierGroupView = z.infer<typeof ModifierGroupViewSchema>;
export type ModifierGroupChannelMapping = z.infer<typeof ModifierGroupChannelMappingSchema>;
export type ModifierOptionChannelMapping = z.infer<typeof ModifierOptionChannelMappingSchema>;
export type CreateModifierOption = z.infer<typeof CreateModifierOptionSchema>;
export type CreateModifierGroupOption = z.infer<typeof CreateModifierGroupOptionSchema>;
export type CreateModifierGroup = z.infer<typeof CreateModifierGroupSchema>;
export type CreateItemModifierBinding = z.infer<typeof CreateItemModifierBindingSchema>;
export type UpdateModifierOption = z.infer<typeof UpdateModifierOptionSchema>;
export type UpdateModifierGroup = z.infer<typeof UpdateModifierGroupSchema>;
export type UpdateItemModifierBinding = z.infer<typeof UpdateItemModifierBindingSchema>;

// ============================================================================
// QUERY OPTIONS
// ============================================================================

/**
 * Modifier group filter options.
 * @interface ModifierGroupFilters
 */
export interface ModifierGroupFilters {
    /** Text search across name/description */
    search?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by required status */
    isRequired?: boolean;
    /** Filter by active status */
    isActive?: boolean;
}

/**
 * Modifier group sorting options.
 * @interface ModifierGroupSorting
 */
export interface ModifierGroupSorting {
    /** Field to sort by */
    field: 'name' | 'displayOrder' | 'createdAt';
    /** Sort direction */
    direction: 'asc' | 'desc';
}

/**
 * Modifier group query options.
 * @interface ModifierGroupQueryOptions
 */
export interface ModifierGroupQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ModifierGroupFilters;
    /** Optional sorting */
    sorting?: ModifierGroupSorting;
}

/**
 * Modifier option filter options.
 * @interface ModifierOptionFilters
 */
export interface ModifierOptionFilters {
    /** Text search across name/description */
    search?: string;
    /** Filter by location ID */
    locationId?: string;
    /** Filter by parent modifier group ID */
    modifierGroupId?: string;
    /** Filter by default status */
    isDefault?: boolean;
    /** Filter by active status */
    isActive?: boolean;
}

/**
 * Modifier option sorting options.
 * @interface ModifierOptionSorting
 */
export interface ModifierOptionSorting {
    /** Field to sort by */
    field: 'name' | 'displayOrder' | 'createdAt';
    /** Sort direction */
    direction: 'asc' | 'desc';
}

/**
 * Modifier option query options.
 * @interface ModifierOptionQueryOptions
 */
export interface ModifierOptionQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ModifierOptionFilters;
    /** Optional sorting */
    sorting?: ModifierOptionSorting;
}

/**
 * Item modifier binding filter options.
 * @interface ItemModifierBindingFilters
 */
export interface ItemModifierBindingFilters {
    /** Filter by location ID */
    locationId?: string;
    /** Filter by menu item ID */
    menuItemId?: string;
    /** Filter by menu set ID */
    menuSetId?: string;
    /** Filter by modifier group ID */
    modifierGroupId?: string;
    /** Filter by active status */
    isActive?: boolean;
}

/**
 * Item modifier binding sorting options.
 * @interface ItemModifierBindingSorting
 */
export interface ItemModifierBindingSorting {
    /** Field to sort by */
    field: 'displayOrder' | 'createdAt';
    /** Sort direction */
    direction: 'asc' | 'desc';
}

/**
 * Item modifier binding query options.
 * @interface ItemModifierBindingQueryOptions
 */
export interface ItemModifierBindingQueryOptions {
    /** Page number (1-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Optional filters */
    filters?: ItemModifierBindingFilters;
    /** Optional sorting */
    sorting?: ItemModifierBindingSorting;
}
