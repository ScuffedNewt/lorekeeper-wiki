# Lorekeeper Wiki

This repo serves as a proof-of-concept for a Sveltekit based wiki for the Lorekeeper framework.

---
## Listing an Extension

To create a listing for an extension you have created (or have permission to list), you must create a .json file within the ``src/extensions`` folder.
The json should follow the following format:

```json
{
    "key": "key",
    "name": "Name",
    "url": "https://github.com/username/lorekeeper/tree/branch_name",
    "description": [
        "description"
    ],
    "contains": [
        ["Extension Name", "https://github.com/user_name/lorekeeper/tree/branch_name"],
    ],
    "commands": [
        "command_1",
        "command_2"
    ],
    "images": [
        "image.png"
    ],
    "credits": [
        ["Username", "https://github.com/username"]
    ]
}
```

### Further Information

| Key | Name | URL |
| :----: | :----: | :----: |
| The key for an extension should be all lowercase, and contain only alphanumeric characters and the "-" or dash character. The key is used for the extension URL. | The extension name can contain any characters, including emojis and spaces.          | The url should link directly to the github page of the extension.   |

#### Description

Extension descriptions can be pretty long. To aide this whilst using JSON, each newline is a new string inside of the description array.

##### Example

```json
{
    "description": [
        "Extension descriptions can be pretty long.",
        "Therefore you can break them up by making multiple lines of text.",
    ]
}
```

#### Contains

The contains array is used to show what extensions are included in the extension. This is useful so that users don't install possibly conflicting extensions.

The array should contain the extension name and url.

##### Example

```json
{
    "contains": [
        ["Extension Name", "https://github.com/user_name/lorekeeper/tree/branch_name"],
    ]
}
```

#### Images

Images is an array of image names, including file extension. Images should be added in
``static/extensions/{extension_key}/``

#### Credits

Credits is an array of arrays, containing the name and url of each person to credit.

##### Example

```json
{
    "credits": [
        ["Username", "https://github.com/user_name"],
        ["Username_2", "https://github.com/user_name2"]
    ]
}
```

<mark>JSON not following this standard may be rejected. Please fill out all fields even if they are empty.</mark>

---
