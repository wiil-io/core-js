/**
 * Dynamic Field Types
 *
 * Defines the supported field types for dynamic form field definitions.
 * Used across appointment and other configurable form schemas.
 */
export declare enum DynamicFieldType {
    /** Single-line text input */
    TEXT = "text",
    /** Multi-line text input */
    TEXTAREA = "textarea",
    /** Numeric input */
    NUMBER = "number",
    /** Boolean checkbox/toggle */
    BOOLEAN = "boolean",
    /** Date picker (date only) */
    DATE = "date",
    /** Time picker (time only) */
    TIME = "time",
    /** DateTime picker (date and time) */
    DATETIME = "datetime",
    /** Email input with validation */
    EMAIL = "email",
    /** Phone number input */
    PHONE = "phone",
    /** Single selection dropdown */
    SELECT = "select",
    /** Multiple selection input */
    MULTISELECT = "multiselect"
}
/** Array of all dynamic field types for Zod enum usage */
export declare const DynamicFieldTypes: readonly [DynamicFieldType.TEXT, DynamicFieldType.TEXTAREA, DynamicFieldType.NUMBER, DynamicFieldType.BOOLEAN, DynamicFieldType.DATE, DynamicFieldType.TIME, DynamicFieldType.DATETIME, DynamicFieldType.EMAIL, DynamicFieldType.PHONE, DynamicFieldType.SELECT, DynamicFieldType.MULTISELECT];
/**
 * Agent tool call parameter type definition
 * Maps field types to JSON schema types for LLM tool calls
 */
export interface AgentToolParamType {
    type: 'string' | 'number' | 'boolean' | 'array';
    format?: string;
    items?: {
        type: string;
    };
    description: string;
}
/**
 * Maps DynamicFieldType to agent tool call parameter types
 * Used to generate tool call schemas for LLM agents
 */
export declare const DynamicFieldTypeToAgentToolParam: Record<DynamicFieldType, AgentToolParamType>;
