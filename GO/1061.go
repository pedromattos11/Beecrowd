package main

import (
	"fmt"
	"time"
)

func main() {
	var day, start, end string
	var dayNum1, dayNum2, hour1, min1, sec1, hour2, min2, sec2 int

	fmt.Scanf("%s %d", &day, &dayNum1)
	fmt.Scanf("%d:%d:%d", &hour1, &min1, &sec1)
	fmt.Scanf("%s %d", &day, &dayNum2)
	fmt.Scanf("%d:%d:%d", &hour2, &min2, &sec2)

	startTime := time.Date(0, 0, dayNum1, hour1, min1, sec1, 0, time.UTC)
	endTime := time.Date(0, 0, dayNum2, hour2, min2, sec2, 0, time.UTC)

	duration := endTime.Sub(startTime)

	days := int(duration.Hours() / 24)
	hours := int(duration.Hours()) % 24
	minutes := int(duration.Minutes()) % 60
	seconds := int(duration.Seconds()) % 60

	fmt.Printf("%d dia(s)\n%d hora(s)\n%d minuto(s)\n%d segundo(s)\n", days, hours, minutes, seconds)
}