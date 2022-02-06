package main

import "testing"

func TestHello(t *testing.T) {
	assertCorrectMessage := func(t testing.TB, got, want string) {
		t.Helper()
		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	}

	t.Run("saying hello to people", func (t *testing.T) {
		got := Hello("Nate", "")
		want := "Hello, Nate!"
		assertCorrectMessage(t, got, want)
	})

	t.Run("say 'Hello, World!' when an empty string is supplied", func (t *testing.T) {
		got := Hello("", "")
		want := "Hello, World!"

		assertCorrectMessage(t, got, want)
	})

	t.Run("in Spanish", func(t *testing.T) {
		got := Hello("Elodie", "Spanish")
		want := "¡Hola, Elodie!"
		assertCorrectMessage(t, got, want)
	})
	t.Run("in French", func(t *testing.T) {
		got := Hello("Elodie", "French")
		want := "Bonjour, Elodie!"
		assertCorrectMessage(t, got, want)
	})
	t.Run("in Korean", func(t *testing.T) {
		got := Hello("Elodie", "Korean")
		want := "Annyeong, Elodie!"
		assertCorrectMessage(t, got, want)
	})


}
