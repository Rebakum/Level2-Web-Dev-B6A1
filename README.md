# TypeScript: Interfaces vs Types & keyof Explained

## 1. What are some differences between interfaces and types in TypeScript?

TypeScript-এ `interface` আর `type`—দুটোই ব্যবহার করা হয় কোনো object-এর গঠন (structure) নির্ধারণ করতে।  
তবে দুটোর মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

---

## Interface কী?

**Interface হলো একটা নকশা (blueprint)** — যা দিয়ে object-এর shape নির্ধারণ করা হয়।  
সাধারণত object-এর structure define করতে interface ব্যবহার করা হয়।

### উদাহরণ:

```
interface Person {
  name: string;
  age: number;
}
```

## Type Aliases কী?

TypeScript-এ **Type Aliases** হলো এমন একটি ফিচার যেখানে আমরা যেকোনো ডেটা টাইপের জন্য নতুন একটি নাম (alias) তৈরি করতে পারি।  
এটি শুধু object structure নয় — আরও অনেক কিছু define করতে পারে:

- ✔ **Union type**
- ✔ **Primitive type**
- ✔ **Tuple**
- ✔ **Function type**
- ✔ এবং আরও অনেক জটিল টাইপ

এটি কোডকে readable এবং reusable করতে সাহায্য করে।

### উদাহরণ

```

type ID = string | number;

type Point = [number, number];



## Interface vs Type (Comparison Table)

TypeScript-এ Interface এবং Type-এর মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।
সেগুলো নিচের টেবিলে পরিষ্কারভাবে দেখানো হলো:

| বিষয়                                  | Interface                   | Type                       |
| ------------------------------------- | --------------------------- | -------------------------- |
| **মূল ব্যবহার**                       | Object structure define করা | সব ধরনের type define করা   |
| **Extend করা যায়?**                   | ✔️ সহজে করা যায়             | ✔️ যায় (তবে ভিন্ন উপায়ে)   |
| **Duplicate declare করলে merge হয়?**  | ✔️ merge হয়                 | ❌ merge হয় না (error দেয়) |
| **Union / primitive define করা যায়?** | ❌ না                       | ✔️ হয়                      |
| **Complex type handle করতে পারে?**    | আংশিক                       | পুরোপুরি                   |

```

```

## Interface Merge Example (Type দিয়ে হয় না)

TypeScript-এ **interface** বারবার declare করলে সেগুলো একসাথে merge হয়ে যায়।
কিন্তু **type** বারবার declare করলে error দেয়।

### উদাহরণ:

interface Car {
brand: string;
}

interface Car {
model: string;
}

const c: Car = { brand: "Toyota", model: "Corolla" }

```

```

## keyof:

keyof হলো TypeScript-এর একটি বিশেষ keyword,
যা কোনো object type-এর সব key-এর নামকে একটি union type হিসেবে রিটার্ন করে।

মানে, এটি object-এর key গুলোকে type বানিয়ে দেয়।
উদাহরণ:

interface Book {
title: string;
author: string;
publishedYear: number;
}

type BookKeys = keyof Book;
এখন BookKeys এর মান হবে:
"title" | "author" | "publishedYear"

```

```

## keyof এর বাস্তব ব্যবহার (Real Example)

interface Book {
title: string;
author: string;
publishedYear: number;
}

function getBookValue(book: Book, key: keyof Book) {
return book[key];
}

const myBook = {
title: "Gatsby",
author: "Fitzgerald",
publishedYear: 1925
};

console.log(getBookValue(myBook, "author"));
এখানে "author" valid, কারণ এটি Book-এর একটি key
"price" দিলে error দেবে
কারণ price বইয়ের structure-এর অংশ নয়

```

```

## সারসংক্ষেপ (Summary)

Interface

Object-এর structure তৈরিতে বেশি ব্যবহার
Extend এবং merge করা যায়

Type

বেশি flexible
union, primitive, function, tuple—সব define করতে পারে
merge করা যায় না

keyof

object-এর সব key-কে একত্রে একটি বিশেষ union type বানায়
ভুল property access করা থেকে আমাদের বাঁচায় |

```

```

```
