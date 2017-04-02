class SomeThingCollection {}
interface SomeThing {}

export function createGenericSomeThing<T extends SomeThingCollection<U>, U implements SomeThing>(
  collectionConstructor : { new() : T },
  thingConstructor : { new (name : string, someThing : Object) : U }, data): SomeThingCollection<SomeThing> {
  return [SomeThing];
}
