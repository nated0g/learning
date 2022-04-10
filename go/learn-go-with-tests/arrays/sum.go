package main

func Sum(numbers []int) (sum int) {
	for _, n := range numbers {
		sum += n
	}
	return
}

func SumAll(numbersToSum ...[]int) []int {
	var sums []int
	for _, numbers := range numbersToSum {
		sums = append(sums, Sum(numbers))
	}
	return sums
}
