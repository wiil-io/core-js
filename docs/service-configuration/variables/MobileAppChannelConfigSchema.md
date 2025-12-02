[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.8**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / MobileAppChannelConfigSchema

# Variable: MobileAppChannelConfigSchema

```ts
const MobileAppChannelConfigSchema: ZodObject<{
  packageName: ZodDefault<ZodString>;
  platform: ZodDefault<ZodEnum<typeof MobilePlatform>>;
}, $strip>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:73](https://github.com/wiil-io/core-js/blob/37fff13d5d1551b6c7ae100ac09635b34618b421/src/core/service-configuration/interaction-channels.schema.ts#L73)

Zod schema for mobile app channel configuration.

Configuration specific to mobile application channels for native iOS and Android integrations.
Enables SDK-based integration with platform-specific UI components.

## Remarks

**Architecture Context:**
- **Used By**: Mobile deployment channels
- **Features**: SDK-based integration, deep linking, platform-specific UI
- **Status**: Coming soon - currently in development
