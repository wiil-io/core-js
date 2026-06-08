"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateItemModifierBindingSchema = exports.UpdateModifierGroupSchema = exports.UpdateModifierOptionSchema = exports.CreateItemModifierBindingSchema = exports.CreateModifierGroupSchema = exports.CreateModifierGroupOptionSchema = exports.CreateModifierOptionSchema = exports.ModifierGroupViewSchema = exports.ModifierOptionViewSchema = exports.AppliedModifierSchema = exports.ItemModifierBindingSchema = exports.ModifierOptionOverrideSchema = exports.ModifierGroupSchema = exports.ModifierOptionSchema = exports.ModifierOptionChannelMappingSchema = exports.ModifierGroupChannelMappingSchema = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../../base.schema");
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
exports.ModifierGroupChannelMappingSchema = zod_1.z.object({
    channelId: zod_1.z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalModifierGroupId: zod_1.z.string().describe("External modifier group ID for this specific channel"),
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
exports.ModifierOptionChannelMappingSchema = zod_1.z.object({
    channelId: zod_1.z.string().describe("Channel ID (e.g., doordash, uber-eats)"),
    externalModifierOptionId: zod_1.z.string().describe("External modifier option ID for this specific channel"),
    externalModifierGroupId: zod_1.z.string().nullable().optional().describe("Optional external parent modifier group ID in this channel"),
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
exports.ModifierOptionSchema = base_schema_1.BaseModelSchema.safeExtend({
    modifierRevisionId: zod_1.z.string().nullable().optional().describe("Optional modifier revision ID for version-scoped data"),
    locationId: zod_1.z.string().nullable().optional().describe("Location ID for location-specific modifiers"),
    modifierGroupId: zod_1.z.string().describe("Parent modifier group ID"),
    name: zod_1.z.string().min(1).describe("Modifier option name (e.g., Large, Extra Cheese)"),
    description: zod_1.z.string().nullable().optional().describe("Modifier option description"),
    priceDelta: zod_1.z.number().default(0).describe("Price adjustment for selecting this option"),
    isDefault: zod_1.z.boolean().default(false).describe("Whether this is the default option"),
    displayOrder: zod_1.z.number().int().nonnegative().default(0).describe("Display order within the group"),
    channelMappings: zod_1.z.array(exports.ModifierOptionChannelMappingSchema).nullable().optional().describe("Per-channel modifier option ID mappings"),
    isActive: zod_1.z.boolean().default(true).describe("Whether this option is active"),
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
exports.ModifierGroupSchema = base_schema_1.BaseModelSchema.safeExtend({
    modifierRevisionId: zod_1.z.string().nullable().optional().describe("Optional modifier revision ID for version-scoped data"),
    locationId: zod_1.z.string().nullable().optional().describe("Location ID for location-specific modifiers"),
    name: zod_1.z.string().min(1).describe("Modifier group name (e.g., Size, Add-ons)"),
    description: zod_1.z.string().nullable().optional().describe("Modifier group description"),
    options: zod_1.z.array(exports.ModifierOptionSchema).min(1, "At least one modifier option is required").describe("Modifier options within this group"),
    minSelection: zod_1.z.number().int().nonnegative().default(0).describe("Minimum number of options that must be selected"),
    maxSelection: zod_1.z.number().int().positive().nullable().optional().describe("Maximum number of options that can be selected"),
    isRequired: zod_1.z.boolean().default(false).describe("Whether selection from this group is required"),
    displayOrder: zod_1.z.number().int().nonnegative().default(0).describe("Display order in the menu"),
    channelMappings: zod_1.z.array(exports.ModifierGroupChannelMappingSchema).nullable().optional().describe("Per-channel modifier group ID mappings"),
    isActive: zod_1.z.boolean().default(true).describe("Whether this group is active"),
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
exports.ModifierOptionOverrideSchema = zod_1.z.object({
    modifierOptionId: zod_1.z.string().describe("Target modifier option ID"),
    priceDeltaOverride: zod_1.z.number().nullable().optional().describe("Override price delta"),
    isDefaultOverride: zod_1.z.boolean().nullable().optional().describe("Override default selection"),
    displayOrderOverride: zod_1.z.number().int().nullable().optional().describe("Override display order"),
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
exports.ItemModifierBindingSchema = base_schema_1.BaseModelSchema.safeExtend({
    modifierRevisionId: zod_1.z.string().nullable().optional().describe("Optional modifier revision ID for version-scoped data"),
    locationId: zod_1.z.string().nullable().optional().describe("Location ID for location-specific bindings"),
    menuItemId: zod_1.z.string().nullable().optional().describe("Menu item ID target"),
    menuItemVariantId: zod_1.z.string().nullable().optional().describe("Optional menu item variant ID target"),
    menuSetId: zod_1.z.string().nullable().optional().describe("Optional menu set ID target"),
    modifierGroupId: zod_1.z.string().describe("Modifier group ID to bind"),
    isRequiredOverride: zod_1.z.boolean().nullable().optional().describe("Override isRequired from modifier group"),
    minSelectionOverride: zod_1.z.number().int().nonnegative().nullable().optional().describe("Override minSelection"),
    maxSelectionOverride: zod_1.z.number().int().positive().nullable().optional().describe("Override maxSelection"),
    excludedOptionIds: zod_1.z.array(zod_1.z.string()).nullable().optional().describe("Option IDs to exclude from this binding"),
    optionOverrides: zod_1.z.array(exports.ModifierOptionOverrideSchema).nullable().optional().describe("Per-option overrides for this binding"),
    displayOrder: zod_1.z.number().int().nonnegative().default(0).describe("Display order"),
    isActive: zod_1.z.boolean().default(true).describe("Whether this binding is active"),
}).superRefine((data, ctx) => {
    if (data.minSelectionOverride !== undefined &&
        data.minSelectionOverride !== null &&
        data.maxSelectionOverride !== undefined &&
        data.maxSelectionOverride !== null &&
        data.maxSelectionOverride < data.minSelectionOverride) {
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
exports.AppliedModifierSchema = zod_1.z.object({
    modifierGroupId: zod_1.z.string().nullable().optional().describe("Internal modifier group ID"),
    modifierOptionId: zod_1.z.string().nullable().optional().describe("Internal modifier option ID"),
    externalModifierGroupId: zod_1.z.string().nullable().optional().describe("External modifier group ID"),
    externalModifierOptionId: zod_1.z.string().nullable().optional().describe("External modifier option ID"),
    groupName: zod_1.z.string().min(1).describe("Modifier group name"),
    optionName: zod_1.z.string().min(1).describe("Modifier option name"),
    quantity: zod_1.z.number().int().positive().default(1).describe("Quantity of this modifier"),
    priceDelta: zod_1.z.number().default(0).describe("Price adjustment for this modifier"),
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
exports.ModifierOptionViewSchema = zod_1.z.object({
    id: zod_1.z.string().describe("Modifier option ID"),
    name: zod_1.z.string().min(1).describe("Option name"),
    description: zod_1.z.string().nullable().optional().describe("Option description"),
    priceDelta: zod_1.z.number().default(0).describe("Price adjustment"),
    isDefault: zod_1.z.boolean().default(false).describe("Whether this is the default option"),
    displayOrder: zod_1.z.number().int().nonnegative().default(0).describe("Display order"),
    channelMappings: zod_1.z.array(exports.ModifierOptionChannelMappingSchema).nullable().optional().describe("Channel mappings"),
    isActive: zod_1.z.boolean().default(true).describe("Whether active"),
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
exports.ModifierGroupViewSchema = zod_1.z.object({
    id: zod_1.z.string().describe("Modifier group ID"),
    name: zod_1.z.string().min(1).describe("Group name"),
    description: zod_1.z.string().nullable().optional().describe("Group description"),
    displayOrder: zod_1.z.number().int().nonnegative().default(0).describe("Display order"),
    channelMappings: zod_1.z.array(exports.ModifierGroupChannelMappingSchema).nullable().optional().describe("Channel mappings"),
    isActive: zod_1.z.boolean().default(true).describe("Whether active"),
    isRequired: zod_1.z.boolean().default(false).describe("Whether required"),
    minSelection: zod_1.z.number().int().nonnegative().default(0).describe("Minimum selections"),
    maxSelection: zod_1.z.number().int().positive().nullable().optional().describe("Maximum selections"),
    options: zod_1.z.array(exports.ModifierOptionViewSchema).default([]).describe("Options in this group"),
});
// ============================================================================
// CREATE/UPDATE SCHEMAS
// ============================================================================
/**
 * Schema for creating a new modifier option.
 * Omits auto-generated fields.
 */
exports.CreateModifierOptionSchema = exports.ModifierOptionSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
exports.CreateModifierGroupOptionSchema = exports.CreateModifierOptionSchema.omit({
    modifierGroupId: true,
});
/**
 * Schema for creating a new modifier group.
 * Omits auto-generated fields.
 */
exports.CreateModifierGroupSchema = exports.ModifierGroupSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    options: true,
}).safeExtend({
    options: zod_1.z.array(exports.CreateModifierGroupOptionSchema).min(1, "At least one modifier option is required").describe("Modifier options within this group"),
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
exports.CreateItemModifierBindingSchema = exports.ItemModifierBindingSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
/**
 * Schema for updating an existing modifier option.
 * All fields optional except id (required).
 */
exports.UpdateModifierOptionSchema = exports.CreateModifierOptionSchema.partial().safeExtend({
    id: zod_1.z.string(),
});
/**
 * Schema for updating an existing modifier group.
 * All fields optional except id (required).
 */
exports.UpdateModifierGroupSchema = exports.CreateModifierGroupSchema.partial().safeExtend({
    id: zod_1.z.string(),
});
/**
 * Schema for updating an existing item modifier binding.
 * All fields optional except id (required).
 */
exports.UpdateItemModifierBindingSchema = exports.CreateItemModifierBindingSchema.partial().safeExtend({
    id: zod_1.z.string(),
});
