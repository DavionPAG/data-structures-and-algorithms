# Hashtables
<!-- Short summary or background information -->

## Challenge
Implement a Hashtable with the following methods:

- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get: takes in the key and returns the value from the table.
- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->


- Hash: split the key into single letters, combine the charCode value of all letters, multiply that by a random number and get the remainder of that number divided by the size of the hashmap.

- add: hash the key, create a LL for that if there isn't one already. append to the key/value to the LL.

- get: hash the key, Get the value of map(hash), Traverse the linked list, Return the value

- contains: hash the key, Get the value of map(hash), Traverse the linked list, Return a boolean