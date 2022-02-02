package main

import (
	"fmt"
	"math/rand"
	"time"
)

// A simple number guess game to get more familiar with the language
func main() {
	s1 := rand.NewSource(time.Now().UnixNano())
	num := rand.New(s1).Intn(100)

	fmt.Println("I am thinking of a number between 1 and 100")
	var guess int
	var numGuesses int
	for ; guess != num; numGuesses++ {
		if numGuesses != 0 {
			if guess > num {
				fmt.Println("Too high")
			} else if guess < num {
				fmt.Println("Too low")
			}
		}
		fmt.Println("What's your guess?")
		fmt.Scanln(&guess)
	}
	fmt.Printf("You guessed the number in %d tries.\n", numGuesses)
}
