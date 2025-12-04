[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.12**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / MobileAppChannelSchema

# Variable: MobileAppChannelSchema

```ts
const MobileAppChannelSchema: ZodObject<MobileAppChannelType>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:185](https://github.com/wiil-io/core-js/blob/b0f7f7950af29611aee8da699c9336043a3229b0/src/core/service-configuration/interaction-channels.schema.ts#L185)

Zod schema for mobile app deployment channel.

Defines a native mobile application channel for iOS and Android apps. Enables SDK-based
integration with platform-specific UI components and capabilities.

## Remarks

**Architecture Context:**
- **Channel Type**: Mobile (Native App)
- **Integration**: iOS apps, Android apps, cross-platform frameworks (React Native, Flutter)
- **Features**: SDK integration, deep linking, platform-specific UI, push notifications
- **Status**: Coming soon - currently in development
