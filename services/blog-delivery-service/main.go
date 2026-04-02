// Named goroutines.
package main

import (
	"fmt"
	"strings"
	"unicode"
)

// counter stores the number of digits in each word.
// The key is the word, and the value is the number of digits.
type counter map[string]int

// pair stores a word and the number of digits in it.
type pair struct {
	word  string
	count int
}

// countDigitsInWords counts the number of digits in words,
// fetching the next word with next().
func countDigitsInWords(next func() string) counter {
	pending := make(chan string)
	go submitWords(next, pending)

	counted := make(chan pair)
	go countWords(pending, counted)

	return fillStats(counted)
}

// solution start

// submitWords sends words to be counted.
func submitWords(next func() string, pending chan<- string) {
	for {
		word := next()
		pending <- word
		if word == "" {
			break
		}
	}
}

// countWords counts digits in words.
func countWords(pending <-chan string, counted chan<- pair) {
	for {
		word := <-pending
		count := countDigits(word)
		counted <- pair{word, count}
		if word == "" {
			break
		}
	}
}

// fillStats prepares the final statistics.
func fillStats(counted <-chan pair) counter {
	stats := counter{}
	for {
		stat := <-counted
		if stat.word == "" {
			break
		}
		stats[stat.word] = stat.count
	}

	return stats
}

// solution end

// countDigits returns the number of digits in a string.
func countDigits(str string) int {
	count := 0
	for _, char := range str {
		if unicode.IsDigit(char) {
			count++
		}
	}
	return count
}

// printStats prints the number of digits in words.
func printStats(stats counter) {
	for word, count := range stats {
		fmt.Printf("%s: %d\n", word, count)
	}
}

// wordGenerator returns a generator that yields words from a phrase.
func wordGenerator(phrase string) func() string {
	words := strings.Fields(phrase)
	idx := 0
	return func() string {
		if idx == len(words) {
			return ""
		}
		word := words[idx]
		idx++
		return word
	}
}

func main() {
	phrase := "0ne 1wo thr33 4068"
	next := wordGenerator(phrase)
	stats := countDigitsInWords(next)
	printStats(stats)
}
