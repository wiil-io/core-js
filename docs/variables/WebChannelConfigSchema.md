[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.1**](../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../globals.md) / WebChannelConfigSchema

# Variable: WebChannelConfigSchema

```ts
const WebChannelConfigSchema: ZodObject<{
  communicationType: ZodDefault<ZodEnum<typeof OttCommunicationType>>;
  customCssUrl: ZodDefault<ZodNullable<ZodOptional<ZodURL>>>;
  widgetConfiguration: ZodOptional<ZodObject<{
     position: ZodDefault<ZodEnum<{
        left: "left";
        right: "right";
     }>>;
     theme: ZodDefault<ZodEnum<{
        custom: "custom";
        light: "light";
        dark: "dark";
     }>>;
     customTheme: ZodDefault<ZodOptional<ZodRecord<ZodString, ZodString>>>;
  }, $strip>>;
}, $strip>;
```

Defined in: src/core/service-configuration/interaction-channels.schema.ts:30

Zod schema for web channel configuration.

Configuration specific to web-based chat widget channels.
