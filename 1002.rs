use std::io;

fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let raio: f64 = input.trim().parse().expect("Invalid input");

    let pi = 3.14159;
    let area = pi * raio * raio;

    println!("A={:.4}", area);
}