/**
 * @fileoverview Central export point for dynamic agent setup schemas.
 * @module service-configuration/dynamic_setup
 *
 * Provides schemas for dynamically configuring AI assistants across different
 * communication channels (phone, web). Includes base configuration schemas
 * and channel-specific extensions for voice and text interactions.
 */
export * from './phone-agent-setup';
export * from './web-agent-setup';
