# Hostel Room Maintenance Request Form

## Objective
Create an HTML form for hostel room maintenance requests and style it using CSS. Include information like name, room number, type of issue, description, urgency etc.

## Some suggestions while styling the form:
- Style the form to have a clean, modern look.
- Incorporate appropriate input types and placeholders
- Use an appropriate color scheme that's easy on the eyes.
- Style form inputs consistently, including on focus states.
- Make the submit button stand out.

## Sample Sections

### Full Name
- **Input type:** text
- **Requirements:** Required, 2-50 characters, pattern validation for letters and spaces only
- **Placeholder:** "Enter your full name"

### Student ID
- **Input type:** number or text with pattern
- **Requirements:** Required, exactly 8 digits, numeric validation
- **Placeholder:** "02250123"

### Email Address
- **Input type:** email
- **Requirements:** Required, valid email format
- **Placeholder:** "student.cst@rub.edu.bt"

### Phone Number
- **Input type:** tel
- **Requirements:** Required, phone pattern validation
- **Placeholder:** "12345678"

### Room Information Section
#### Block/Building Name
- **Input type:** select dropdown
- **Options:** Block A, Block B, Block C, Block F, RK
- **Requirements:** Required selection

#### Room Number
- **Input type:** number
- **Requirements:** Required, range 100-999
- **Placeholder:** "Room number (e.g., 205)"

#### Floor Number
- **Input type:** number
- **Requirements:** Required, range 1-10
- **Placeholder:** "Floor number"

### Issue Details Section
#### Type of Issue
- **Input type:** select dropdown with grouped options
- **Categories:**
  - Electrical
  - Plumbing
  - Furniture
  - Infrastructure
  - Cleaning
  - Other

#### Issue Priority/Urgency
- **Input type:** radio buttons
- **Options:**
  - Emergency (Immediate attention required)
  - High (Within 24 hours)
  - Medium (Within 3 days)
  - Low (Within a week)
- **Requirements:** Required selection

#### Issue Description
- **Input type:** textarea
- **Requirements:** Required, 20-500 characters, word counter
- **Placeholder:** "Please describe the issue in detail..."
- **Attributes:** rows="5" cols="50"