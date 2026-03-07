# Fare Calculator

🇺🇸 English | [🇪🇬 العربية](README.ar.md)

## Overview

Fare Calculator is a small utility designed to solve a very common problem in public transportation: **collecting fares from passengers without confusion or calculation mistakes.**

In many situations — especially for university students or people sitting near the driver — someone has to collect the fare from everyone and calculate:

- Who paid
- How much they paid
- How many passengers they represent
- How much change is still required

This process can become confusing very quickly, especially when the fare amount is unusual (for example **13, 17.5, or 21**) or when multiple people pay with different bills.

This project was created to make the process **fast, simple, and error-free**.

As software engineers, our job is to **solve real-life problems**, and this project is a small example of that idea.

---

## Screenshot

<img src="Fare Calculator.jpeg" alt="Fare Calculator Screenshot" width="300">

---

## 🚀 Features

### ⚡ Real-Time Calculations

All calculations happen **instantly while typing**.

As soon as you enter:

- Fare amount
- Number of passengers
- Paid amount

The system automatically calculates:

- Remaining change
- Driver earnings
- Total passengers covered

This eliminates the need to re-enter data if something changes.

---

### 👥 Group-Based Passenger Entry

Passengers are entered as **groups**.

Example:

> "3 people paid 50"

This layout reflects how people naturally say it in real life, making the interface intuitive.

---

### ➕ Add Group System

Pressing **Add Group** does two things:

1. Updates the global calculations:
    - Driver net earnings
    - Total passengers covered
    - Remaining change for passengers

2. If the group has remaining change, it creates a **group card** in the Active Groups section.

Each card shows:

- Number of passengers
- Amount paid
- Remaining change
- A **payout button** when the change is returned.

---

### 🧾 Smart Group List

Only groups that **still have change remaining** appear in the list.

Groups that paid the exact fare are **not displayed**, keeping the interface clean and focused on what actually matters.

---

### 💸 Payout System

When you return the remaining change to a group:

- You can mark it as **paid**
- The remaining balance is automatically deducted from the total change owed.

This helps track what has already been settled.

---

### 🧹 Clear & Reset Controls

The calculator includes helpful controls:

- **Clear** → resets the current input fields
- **Clear All** → removes all groups and resets the entire calculation

Useful if passengers leave or if you need to start over.

---

### ⚡ Minimal Click Design

The interface is optimized to **reduce the number of clicks and inputs** required.

For example:

If passengers paid the **exact fare**, you only need to:

1. Enter the number of passengers
2. Press **Add Group**

No need to enter the paid amount.

This makes the process much faster during real-world usage.

---

### 🎉 Completion Celebration

When all remaining change has been returned to passengers, a small **celebration animation** appears as a fun reward for finishing the task.

A small thank-you for helping everyone get their correct change 😄

---

## 🎯 Design Goals

The project focuses on three main principles:

- **Speed** – Collect fares as quickly as possible
- **Simplicity** – Only show the information that matters
- **Accuracy** – Prevent calculation mistakes

---

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (Vanilla JS)

No external frameworks or libraries were used.

---

## 💡 Possible Usage

This tool can be helpful for:

- University students
- Public transportation passengers
- Anyone responsible for collecting shared payments

You can even **pin the website to your phone's home screen** for quick access while commuting.

---

## 👤 Author

- GitHub: [Eng-MohamedHosny](https://github.com/Eng-MohamedHosny)
- Frontend Mentor: [Eng-Mohamed Hosny](https://www.frontendmentor.io/profile/Eng-MohamedHosny)
