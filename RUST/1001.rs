use std::io;

fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let a: i32 = input.trim().parse().expect("Invalid input");

    input.clear();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let b: i32 = input.trim().parse().expect("Invalid input");

    let x = a + b;

    println!("X = {}", x);
}