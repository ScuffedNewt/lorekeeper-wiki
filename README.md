# Lorekeeper Wiki

This repo serves as a proof-of-concept for a Sveltekit based wiki for the Lorekeeper framework.

---

## Listing an Extension

To create a listing for an extension you have created (or have permission to list), you must create a .js file within the `src/modules/extensions` folder.
The js should follow the following format:

### Further Information

|                                                                               Key                                                                                |                                    Name                                     |                                URL                                |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :---------------------------------------------------------------: |
| The key for an extension should be all lowercase, and contain only alphanumeric characters and the "-" or dash character. The key is used for the extension URL. | The extension name can contain any characters, including emojis and spaces. | The url should link directly to the github page of the extension. |

#### Description

Extension descriptions can be pretty long. To aide this whilst using JS we use multi-line strings with html enabled.

##### Example

<mark>JS not following this standard may be rejected.</mark>

---
