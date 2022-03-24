package iteration

// Repeat takes a string and repeats it the number of times specified
func Repeat(character string, iterations int) string {
	var repeated string
	for i := 0; i < iterations; i++ {
		repeated += character
	}
	return repeated
}
