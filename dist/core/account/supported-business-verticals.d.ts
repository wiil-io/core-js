/**
 * Supported Business Vertical IDs
 *
 * This file contains only the business vertical IDs extracted from
 * business-verticals-definitions.ts for use in validation and type checking.
 */
export declare const SUPPORTED_BUSINESS_VERTICALS: readonly ["healthcare", "health-wellness", "retail", "finance", "real-estate", "technology", "education", "legal", "automotive", "hospitality", "professional", "others"];
export type SupportedBusinessVerticalId = typeof SUPPORTED_BUSINESS_VERTICALS[number];
