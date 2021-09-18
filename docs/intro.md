---
sidebar_position: 1
---

# Intro

Let's discover **CouchSet in less than a minute**.

## Model

Get started by **creating a new file**. let's call it `Person.model.ts`

```ts
// Person.model.ts
import { Model } from "couchset";
import { ObjectType, Field, InputType } from "type-graphql";


/**
 * GraphQL Type & Input
 */
@InputType("PersonInput")
@ObjectType()
class Person {

  @Field(() => String, { nullable: true })
  id?: string = "";

  @Field(() => String, { nullable: true })
  name?: string = "";

  @Field(() => Date, { nullable: true })
  createdAt?: Date = new Date();

}

const PersonModel: Model = new Model("Person");
```

Done!, now you have a model that comes with some cool methods like `PersonModel.create`, `PersonModel.updateById`, `PersonModel.findById`, `PersonModel.pagination`, `PersonModel.delete` ...e.t.c

You can connect/call from any API controller methods, regardless of any framework you're using.


## Model Automation

This is how we connect and automate it to generate code with all methods,schema, queries ...**example**:

We're going to import `automateModel` method which will receive the model, and or some options to customise the generated code.

```ts
import { automaticModel } from 'couchset';

const automaticPerson = automaticModel(Person, {
  model: PersonModel,
  createUpdate: {
    method: createPerson // e.g override the createUpdate method if you want
  }
});

```

After automating the model, `automaticPerson` will come with Server-side Resolver functions, and client queries, mutations, subscriptions, like below


```ts
// Get all automatic generated resolvers and queries/fragments,mutations,subscriptions
const {
  resolver: PersonResolver, // Server resolver for building GraphQL 
  modelKeys: PersonSelectors, // for any custom queries or exporting
  client, // client queries,mutations,subscriptions
} = automaticPerson;

```

## The Generated Code

Server side resolver functions
- personCreate
- personDelete
- personGet
- personPagination

Client side
- PERSON_CREATE (Mutation)
- PERSON_DELETE (Mutation)
- PERSON_GET (Query)
- PERSON_PAGINATION (Query)


## Example client usage


```ts
// somewhere within my fantastic react app

const { data, loading } = useQuery<{ data: Person[] }>(PERSON_GET, { variables: { id: "ceddy" } });

```