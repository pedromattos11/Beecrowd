package main

import (
	"fmt"
	"time"
)

func main() {
	var day, start, day2, end string

	fmt.Scanln(&day)
	fmt.Scanln(&start)
	fmt.Scanln(&day2)
	fmt.Scanln(&end)

	startTime, _ := time.Parse("Dia 2", start)
	endTime, _ := time.Parse("Dia 2", end)

	duration := endTime.Sub(startTime)

	days := int(duration.Hours() / 24)
	hours := int(duration.Hours()) % 24
	minutes := int(duration.Minutes()) % 60
	seconds := int(duration.Seconds()) % 60

	fmt.Printf("%d dia(s)\n%d hora(s)\n%d minuto(s)\n%d segundo(s)\n", days, hours, minutes, seconds)
}