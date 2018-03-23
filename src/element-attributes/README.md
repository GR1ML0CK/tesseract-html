# Element Attributes

these type definitions are used to enforce the use of correct attribute names and values for any type of element
that we try to create when used with typescript.

This prevents things like this

```typescript
p({
   notAValidAttribute: "this will fail"
})

p({textContent: "this will succeed"})
```