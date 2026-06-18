[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.61**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [service-configuration](../README.md) / WebChannelSchema

# Variable: WebChannelSchema

```ts
const WebChannelSchema: ZodObject<WebChannelType>;
```

Defined in: [src/core/service-configuration/interaction-channels.schema.ts:164](https://github.com/wiil-io/core-js/blob/16f97d4afc9c808249e9e74ff3aad1f67349558b/src/core/service-configuration/interaction-channels.schema.ts#L164)

Zod schema for web-based deployment channel.

Defines a browser-based chat widget channel for website integration. Provides real-time
messaging with rich media support through WebSocket connections.

## Remarks

**Architecture Context:**
- **Channel Type**: Web (Chat Widget)
- **Integration**: Websites, web apps, customer portals, help centers
- **Features**: Embeddable widget, WebSocket real-time communication, rich media, session persistence
