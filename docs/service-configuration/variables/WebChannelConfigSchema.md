[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.74**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / WebChannelConfigSchema

# Variable: WebChannelConfigSchema

```ts
const WebChannelConfigSchema: ZodObject<{
  communicationType: ZodDefault<ZodEnum<typeof OttCommunicationType>>;
  widgetConfiguration: ZodOptional<ZodObject<{
     position: ZodDefault<ZodEnum<{
        left: "left";
        right: "right";
     }>>;
     customTheme: ZodDefault<ZodOptional<ZodRecord<ZodString, ZodString>>>;
  }, $strip>>;
}, $strip>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:51](https://github.com/wiil-io/core-js/blob/b2b0ee98ac1c44b705fbb8bab5be775697b2afe8/src/core/service-configuration/interaction-channels.schema.ts#L51)

Zod schema for web channel configuration.

Configuration specific to web-based chat widget channels that can be embedded in websites
and web applications for browser-based real-time communication.

## Remarks

**Architecture Context:**
- **Used By**: Web deployment channels
- **Features**: Embeddable chat widget, WebSocket communication, rich media support
- **Customization**: Supports custom CSS and theming for brand consistency
