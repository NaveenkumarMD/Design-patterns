Cases where you need a single instance of a class to be used in multiple places.

Let's say we have a class called Tracker thats gonna track all the pages that user has visited

- We create multiple instances of tracker in mutliple file
- But we don't need that
- We need all the pages viewed in a single object.

So we will be using a single object at all the places

### Disadvantages

- Race condition may occur
- Refacoting a single line will affect at many places
