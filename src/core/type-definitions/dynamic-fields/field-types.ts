/**
 * Dynamic Field Types
 *
 * Defines the supported field types for dynamic form field definitions.
 * Used across appointment and other configurable form schemas.
 */

export enum DynamicFieldType {
    /** Single-line text input */
    TEXT = 'text',
    /** Multi-line text input */
    TEXTAREA = 'textarea',
    /** Numeric input */
    NUMBER = 'number',
    /** Boolean checkbox/toggle */
    BOOLEAN = 'boolean',
    /** Date picker (date only) */
    DATE = 'date',
    /** Time picker (time only) */
    TIME = 'time',
    /** DateTime picker (date and time) */
    DATETIME = 'datetime',
    /** Email input with validation */
    EMAIL = 'email',
    /** Phone number input */
    PHONE = 'phone',
    /** Single selection dropdown */
    SELECT = 'select',
    /** Multiple selection input */
    MULTISELECT = 'multiselect',
}

/** Array of all dynamic field types for Zod enum usage */
export const DynamicFieldTypes = [
    DynamicFieldType.TEXT,
    DynamicFieldType.TEXTAREA,
    DynamicFieldType.NUMBER,
    DynamicFieldType.BOOLEAN,
    DynamicFieldType.DATE,
    DynamicFieldType.TIME,
    DynamicFieldType.DATETIME,
    DynamicFieldType.EMAIL,
    DynamicFieldType.PHONE,
    DynamicFieldType.SELECT,
    DynamicFieldType.MULTISELECT,
] as const;

/**
 * Agent tool call parameter type definition
 * Maps field types to JSON schema types for LLM tool calls
 */
export interface AgentToolParamType {
    type: 'string' | 'number' | 'boolean' | 'array';
    format?: string;
    items?: { type: string };
    description: string;
}

/**
 * Maps DynamicFieldType to agent tool call parameter types
 * Used to generate tool call schemas for LLM agents
 */
export const DynamicFieldTypeToAgentToolParam: Record<DynamicFieldType, AgentToolParamType> = {
    [DynamicFieldType.TEXT]: {
        type: 'string',
        description: 'Single-line text value',
    },
    [DynamicFieldType.TEXTAREA]: {
        type: 'string',
        description: 'Multi-line text value',
    },
    [DynamicFieldType.NUMBER]: {
        type: 'number',
        description: 'Numeric value',
    },
    [DynamicFieldType.BOOLEAN]: {
        type: 'boolean',
        description: 'True or false value',
    },
    [DynamicFieldType.DATE]: {
        type: 'string',
        format: 'date',
        description: 'Date in ISO 8601 format (YYYY-MM-DD)',
    },
    [DynamicFieldType.TIME]: {
        type: 'string',
        format: 'time',
        description: 'Time in 24-hour format (HH:MM)',
    },
    [DynamicFieldType.DATETIME]: {
        type: 'string',
        format: 'date-time',
        description: 'Date and time in ISO 8601 format (YYYY-MM-DDTHH:MM:SS)',
    },
    [DynamicFieldType.EMAIL]: {
        type: 'string',
        format: 'email',
        description: 'Valid email address',
    },
    [DynamicFieldType.PHONE]: {
        type: 'string',
        format: 'phone',
        description: 'Phone number with country code',
    },
    [DynamicFieldType.SELECT]: {
        type: 'string',
        description: 'Single selection from available options',
    },
    [DynamicFieldType.MULTISELECT]: {
        type: 'array',
        items: { type: 'string' },
        description: 'Multiple selections from available options',
    },
};
