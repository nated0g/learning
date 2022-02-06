package main

import (
	"fmt"
	"strings"
)

const englishHelloPrefix = "Hello, "
const spanishHelloPrefix = "¡Hola, "
const frenchHelloPrefix = "Bonjour, "
const koreanHelloPrefix = "Annyeong, "


func Hello(name, lang string) string {
	lang = strings.ToLower(lang)
	if name == "" {
		name = "World"
	}
	return greetingPrefix(lang) + name + "!"
}

func greetingPrefix(lang string) (prefix string) {
	prefix = englishHelloPrefix
	switch lang {
	case "french":
		prefix = frenchHelloPrefix
	case "spanish":
		prefix = spanishHelloPrefix
	case "korean":
		prefix = koreanHelloPrefix
	}
	return
}
func main() {
	fmt.Println(Hello("world", ""))
}
