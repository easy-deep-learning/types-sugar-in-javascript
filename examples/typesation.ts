export function createGenericAttributesCollection<T extends AttributesCollection<U>, U extends Attribute>(
  collectionConstructor : { new() : T },
  attributeConstructor : { new (name : string, attributes : Object) : U },
  data): AttributesCollection<Attribute> {
  return [Attribute];
}

class AttributesCollection {}
class Attribute {}
