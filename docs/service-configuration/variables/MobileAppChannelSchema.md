[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.23**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / MobileAppChannelSchema

# Variable: MobileAppChannelSchema

```ts
const MobileAppChannelSchema: ZodObject<MobileAppChannelType>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:183](https://github.com/wiil-io/core-js/blob/044239c5d611706e3f02f4e9da1fbba71c1dc74e/src/core/service-configuration/interaction-channels.schema.ts#L183)

Zod schema for mobile app deployment channel.

Defines a native mobile application channel for iOS and Android apps. Enables SDK-based
integration with platform-specific UI components and capabilities.

## Remarks

**Architecture Context:**
- **Channel Type**: Mobile (Native App)
- **Integration**: iOS apps, Android apps, cross-platform frameworks (React Native, Flutter)
- **Features**: SDK integration, deep linking, platform-specific UI, push notifications
- **Status**: Coming soon - currently in development
