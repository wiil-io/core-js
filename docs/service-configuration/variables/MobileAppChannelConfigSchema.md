[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.75**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / MobileAppChannelConfigSchema

# Variable: MobileAppChannelConfigSchema

```ts
const MobileAppChannelConfigSchema: ZodObject<{
  packageName: ZodDefault<ZodString>;
  platform: ZodDefault<ZodEnum<typeof MobilePlatform>>;
}, $strip>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:71](https://github.com/wiil-io/core-js/blob/30ea300b8c5c9afa9ef99fffaae218b767488d67/src/core/service-configuration/interaction-channels.schema.ts#L71)

Zod schema for mobile app channel configuration.

Configuration specific to mobile application channels for native iOS and Android integrations.
Enables SDK-based integration with platform-specific UI components.

## Remarks

**Architecture Context:**
- **Used By**: Mobile deployment channels
- **Features**: SDK-based integration, deep linking, platform-specific UI
- **Status**: Coming soon - currently in development
