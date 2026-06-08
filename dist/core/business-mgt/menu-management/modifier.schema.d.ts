import { z } from "zod";
/**
 * @fileoverview Modifier schema definitions for business management.
 * @module business-mgt/modifier
 *
 * Includes modifier groups, options, bindings, and applied modifiers
 * for menu item customization (e.g., sizes, add-ons, toppings).
 */
/**
 * Modifier group channel mapping schema.
 * Maps modifier groups to external platform identifiers.
 *
 * @typedef {Object} ModifierGroupChannelMapping
 * @property {string} channelId - Channel identifier (e.g., doordash, uber-eats)
 * @property {string} externalModifierGroupId - External modifier group ID for synchronization
 */
export declare const ModifierGroupChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalModifierGroupId: z.ZodString;
}, z.core.$strip>;
/**
 * Modifier option channel mapping schema.
 * Maps modifier options to external platform identifiers.
 *
 * @typedef {Object} ModifierOptionChannelMapping
 * @property {string} channelId - Channel identifier (e.g., doordash, uber-eats)
 * @property {string} externalModifierOptionId - External modifier option ID for synchronization
 * @property {string} [externalModifierGroupId] - Optional external parent modifier group ID
 */
export declare const ModifierOptionChannelMappingSchema: z.ZodObject<{
    channelId: z.ZodString;
    externalModifierOptionId: z.ZodString;
    externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
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
export declare const ModifierOptionSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    modifierRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modifierGroupId: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceDelta: z.ZodDefault<z.ZodNumber>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodDefault<z.ZodNumber>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalModifierOptionId: z.ZodString;
        externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
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
export declare const ModifierGroupSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    modifierRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    options: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        modifierRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        modifierGroupId: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        priceDelta: z.ZodDefault<z.ZodNumber>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodDefault<z.ZodNumber>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalModifierOptionId: z.ZodString;
            externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        isActive: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    minSelection: z.ZodDefault<z.ZodNumber>;
    maxSelection: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isRequired: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodDefault<z.ZodNumber>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalModifierGroupId: z.ZodString;
    }, z.core.$strip>>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
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
export declare const ModifierOptionOverrideSchema: z.ZodObject<{
    modifierOptionId: z.ZodString;
    priceDeltaOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isDefaultOverride: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    displayOrderOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
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
export declare const ItemModifierBindingSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    modifierRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    menuItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    menuItemVariantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    menuSetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modifierGroupId: z.ZodString;
    isRequiredOverride: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    minSelectionOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxSelectionOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    excludedOptionIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    optionOverrides: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        modifierOptionId: z.ZodString;
        priceDeltaOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isDefaultOverride: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        displayOrderOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>;
    displayOrder: z.ZodDefault<z.ZodNumber>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
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
export declare const AppliedModifierSchema: z.ZodObject<{
    modifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalModifierOptionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    groupName: z.ZodString;
    optionName: z.ZodString;
    quantity: z.ZodDefault<z.ZodNumber>;
    priceDelta: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
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
export declare const ModifierOptionViewSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceDelta: z.ZodDefault<z.ZodNumber>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    displayOrder: z.ZodDefault<z.ZodNumber>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalModifierOptionId: z.ZodString;
        externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
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
export declare const ModifierGroupViewSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    displayOrder: z.ZodDefault<z.ZodNumber>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalModifierGroupId: z.ZodString;
    }, z.core.$strip>>>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    isRequired: z.ZodDefault<z.ZodBoolean>;
    minSelection: z.ZodDefault<z.ZodNumber>;
    maxSelection: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    options: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        priceDelta: z.ZodDefault<z.ZodNumber>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
        displayOrder: z.ZodDefault<z.ZodNumber>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalModifierOptionId: z.ZodString;
            externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        isActive: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
/**
 * Schema for creating a new modifier option.
 * Omits auto-generated fields.
 */
export declare const CreateModifierOptionSchema: z.ZodObject<{
    displayOrder: z.ZodDefault<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalModifierOptionId: z.ZodString;
        externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    modifierRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modifierGroupId: z.ZodString;
    priceDelta: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export declare const CreateModifierGroupOptionSchema: z.ZodObject<{
    displayOrder: z.ZodDefault<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalModifierOptionId: z.ZodString;
        externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    modifierRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceDelta: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Schema for creating a new modifier group.
 * Omits auto-generated fields.
 */
export declare const CreateModifierGroupSchema: z.ZodObject<{
    displayOrder: z.ZodDefault<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalModifierGroupId: z.ZodString;
    }, z.core.$strip>>>>;
    modifierRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    minSelection: z.ZodDefault<z.ZodNumber>;
    maxSelection: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isRequired: z.ZodDefault<z.ZodBoolean>;
    options: z.ZodArray<z.ZodObject<{
        displayOrder: z.ZodDefault<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalModifierOptionId: z.ZodString;
            externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        modifierRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        priceDelta: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Schema for creating a new item modifier binding.
 * Omits auto-generated fields.
 */
export declare const CreateItemModifierBindingSchema: z.ZodObject<{
    displayOrder: z.ZodDefault<z.ZodNumber>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    menuItemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modifierRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modifierGroupId: z.ZodString;
    menuItemVariantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    menuSetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isRequiredOverride: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    minSelectionOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxSelectionOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    excludedOptionIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    optionOverrides: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        modifierOptionId: z.ZodString;
        priceDeltaOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isDefaultOverride: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        displayOrderOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
/**
 * Schema for updating an existing modifier option.
 * All fields optional except id (required).
 */
export declare const UpdateModifierOptionSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isDefault: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalModifierOptionId: z.ZodString;
        externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>>;
    modifierRevisionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    modifierGroupId: z.ZodOptional<z.ZodString>;
    priceDelta: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for updating an existing modifier group.
 * All fields optional except id (required).
 */
export declare const UpdateModifierGroupSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    channelMappings: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        externalModifierGroupId: z.ZodString;
    }, z.core.$strip>>>>>;
    modifierRevisionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    minSelection: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    maxSelection: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    isRequired: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        displayOrder: z.ZodDefault<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        isDefault: z.ZodDefault<z.ZodBoolean>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        channelMappings: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            channelId: z.ZodString;
            externalModifierOptionId: z.ZodString;
            externalModifierGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        modifierRevisionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        priceDelta: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
    id: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for updating an existing item modifier binding.
 * All fields optional except id (required).
 */
export declare const UpdateItemModifierBindingSchema: z.ZodObject<{
    displayOrder: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    locationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    menuItemId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    modifierRevisionId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    modifierGroupId: z.ZodOptional<z.ZodString>;
    menuItemVariantId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    menuSetId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isRequiredOverride: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    minSelectionOverride: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    maxSelectionOverride: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    excludedOptionIds: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    optionOverrides: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        modifierOptionId: z.ZodString;
        priceDeltaOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isDefaultOverride: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        displayOrderOverride: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>>>;
    id: z.ZodString;
}, z.core.$strip>;
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
