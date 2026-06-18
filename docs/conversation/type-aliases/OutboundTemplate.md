[**Wiil Platform JavaScript Data Model Definitions - API Reference v0.0.63**](../../README.md)

***

[Wiil Platform JavaScript Data Model Definitions - API Reference](../../README.md) / [conversation](../README.md) / OutboundTemplate

# Type Alias: OutboundTemplate

```ts
type OutboundTemplate = 
  | {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  name: string;
  code: string;
  isActive: boolean;
  description?: string | null;
  variables: {
     key: string;
     required: boolean;
     description?: string | null;
     defaultValue?: string | null;
  }[];
  tags: string[];
  metadata?: Record<string, unknown> | null;
  channel: EMAIL;
  subjectTemplate: string;
  bodyHtmlTemplate: string;
  bodyTextTemplate?: string | null;
  defaultReplyTo?: string | null;
}
  | {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  name: string;
  code: string;
  isActive: boolean;
  description?: string | null;
  variables: {
     key: string;
     required: boolean;
     description?: string | null;
     defaultValue?: string | null;
  }[];
  tags: string[];
  metadata?: Record<string, unknown> | null;
  channel: SMS;
  bodyTemplate: string;
}
  | {
  id: string;
  createdAt?: number;
  updatedAt?: number;
  name: string;
  code: string;
  isActive: boolean;
  description?: string | null;
  variables: {
     key: string;
     required: boolean;
     description?: string | null;
     defaultValue?: string | null;
  }[];
  tags: string[];
  metadata?: Record<string, unknown> | null;
  channel: WHATSAPP;
  bodyTemplate: string;
};
```

Defined in: [src/core/conversation/outbound-template.schema.ts:185](https://github.com/wiil-io/core-js/blob/d17655f35874178aedae920329b27f2c84a84388/src/core/conversation/outbound-template.schema.ts#L185)

Union schema for all template types.
