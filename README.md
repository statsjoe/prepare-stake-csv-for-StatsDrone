# Google Apps Script for Reversing Sign of Numeric Values in Google Sheets to prepare Stake CSV export report to make it suitable for CSV import at https://statsdrone.com.

This repository contains a Google Apps Script designed to reverse the sign of all numeric values in specified columns of a Google Sheets document. The script adds a custom menu to the Google Sheets UI, allowing users to easily apply the function.

## Table of Contents

- [Description](#description)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The Google Apps Script provided in this repository includes the following functionalities:

- **reverseSignInRange()**: This function reverses the sign of all numeric values in columns C to K, starting from the second row in the active sheet.
- **onOpen()**: This function adds a custom menu to the Google Sheets UI, allowing users to run the `reverseSignInRange` function from the menu.

This script helps in automatically reversing the sign of numeric values in specified columns, making it easier to manage and organize data in Google Sheets and prepare them for StatsDrone reporting.

## Setup

To set up and use this script in your Google Sheets document, follow these steps:

1. **Open the Google Sheets document**:
   - Go to your Google Sheets document where you want to use the script.

2. **Open the Script Editor**:
   - Click on `Extensions` > `Apps Script`.

3. **Copy the Script**:
   - Copy the contents of the `reverseSignScript.gs` file from this repository.

4. **Paste the Script**:
   - In the Script Editor, delete any existing code and paste the copied script.

5. **Save the Script**:
   - Click the disk icon or press `Cmd/Ctrl + S` to save your changes.

6. **Authorize the Script**:
   - Run the script for the first time and follow the authorization prompts to allow the script to access your Google Sheets.

## Usage

After setting up the script, you can use it directly from your Google Sheets:

1. **Refresh the Google Sheets Document**:
   - Refresh the page by pressing `F5` or clicking the reload button in your browser.

2. **Access the Custom Menu**:
   - After refreshing, you will see a new menu called `Custom Scripts` in the menu bar.

3. **Run the Script**:
   - Click on `Custom Scripts` and then select `Clean Data for StatsDrone Import` to run the script.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. **Fork the Repository**:
   - Click the `Fork` button at the top right of this page to create a copy of this repository under your GitHub account.

2. **Clone the Forked Repository**:
   - Clone your forked repository to your local machine using `git clone`.

3. **Create a New Branch**:
   - Create a new branch for your changes using `git checkout -b branch-name`.

4. **Make Your Changes**:
   - Make your changes to the script or documentation.

5. **Commit Your Changes**:
   - Commit your changes with a descriptive commit message.

6. **Push Your Changes**:
   - Push your changes to the new branch in your forked repository.

7. **Submit a Pull Request**:
   - Open a pull request to merge your changes into the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
