# Rich Text for WebVIs

Rich text editing on the web turns out to be a pretty diverse with lots of options available. The goal of this document is to give a few attributes of rich text editors to consider when choosing one for a project.

## Considerations

Doing some limited exploration I put together some attributes of editors I think are important to consider.

This is **not an endorsement of any specific rich text editor**, is not a comprehensive review of editors available, and likely does not cover all the features you may need. This may be a good starting point for things to consider when choosing a rich text editor for your project and may give some good starting examples.

### Editor use cases

From the rich text editors I have looked at it seemed that the feature set and complexity of a text editor can be used to place it into one or more categories of use cases.

I made up the following use cases to help me sort through the JS libraries available so be aware that the definitions are loose and may not be used elsewhere.

1. **Comment editor**. Usually inline in a page with other content and not the primary content on a page. 

   Limited / simple formatting options incuding text formatting and maybe other common content like images. Good for text layout in paragraphs but may not have other layout features like tables or lists. May not not be highly pluggable or configurable.

2. **Blog editor**. Inline in a page and may fill a majority of the page view.

    In addition to text editing, may have features like image resizing and positioning as well as support for tables and lists but with limited configurability. May have plugins for other content types to be placed in document or to change the editing experience.

3. **Document editor**. The primary content on the page and comparable to the feature set of a word processor.

    Even more configurable than the blog level and may support sophisticated layouts like nested / mixed tables and lists, different views such as print vs web layout, advanced plugins, and powerful inline widgets.

4. **Framework platform**.

    A set of tools that can be used to build up the above editors. May not provide an out of the box editor experience but can be used as the components to build up very specialized application specific text editors.

### Edit time text representation

It seems like there are two major models for the edit time representation for rich text editors.

1. An **operational transform / model** representation. This approach seperates the in memory representation of the rich text from what is presented in the HTML visuals of the page. A `contenteditable` field may be used to capture input and display output but the value is saved in JavaScript memory and is separate from the HTML visual in the page.

   This approach is the most "modern" and enables sophisticated editing experiences and a high degree of control of the editor environment. It can also include advanced control of the undo / redo stack and control of how changes are made for real-time saving or multi-user collaborative editing experiences.

2. The classic **`contenteditable`** representation. This approach builds on the browser's built-in rich text editing features and usually involves careful manipulation of an HTML element's value in the page. The value of the HTML element in the page is usually the primary representation.

   Unfortunately, the `contenteditable` feature does not make it easy to plugin a sophisticated editing experience and has been plagued with cross-browser consistency issues. Modern rich text editors generally avoid using the `contenteditable` feature directly to represent the value of the rich text content and instead keep a separate representation of the value in JavaScript memory.

### Persistance representation

The save format for the output of the JavaScript library. The value that may be sent to a server, etc.

1. **Standalone HTML**. The generated HTML can be used standalone or with a simple additional stylesheet that is maintainable without the full library.

2. **Library-coupled HTML**. The generated HTML is very dependendent on the JS library and the library must be used to render correctly or the HTML is highly dependent on the library's associated CSS stylesheet to render correctly.

3. **Abstract format**. The save format is not HTML and requires the library to visualize the rich text and / or needs a transformation from the abstract format to an HTML representation.

### Maintenance

A really rough measure of how well a library is maintained. Some things to consider:
- Does the library have regular releases?

   A stable library that's been around for a while may have infrequent major releases but hopefully address security issues and bugs.
- Are the developers responsive to issues / pull requests?
- Is there a roadmap for the project?
- How long has the project been around?

## Interesting libraries

The rich text libraries I landed on and think are interesting enough to create examples. There are undoubtedly many more interesting libraries and this is not an exhaustive or thorough survey.

| Name              | Comment editor | Blog editor | Document editor | OT or Model | `contenteditable` | Standalone HTML | Library-coupled HTML | Abstract format | Maintenance <br> 🟢🟡🔴 |
| :---------------: | :------------: | :---------: | :-------------: | :---------: | :---------------: | :-------------: | :------------------: | :-------------: | :---: |
| Basecamp Trix     | X              |             |                 | X           |                   | X               |                      |                 | 🟢    |
| Microsoft Rooster | X              |             |                 | ?           |                   | ?               | ?                    |                 | 🟢🟡 |
| Quill             | X              | X           |                 | X           |                   |                 | X                    | X               | 🟡    |
| CKEditor 4        | ?              | X           | X               |             | X                 | X               |                      |                 | 🟡    |

<!-- In work
Additional notes:
- Basecamp Trix: 
-->

Honorable mentions:

- CKEditor 5 is a pretty darn flexible and powerful library. It runs the gamut of the editor types, is operational transform based, and has different save formats. Unfortunately the license makes it incompatible with the goals of these examples but you may want to try it in your own project. See the [CKEditor 5 example](CKEditor5/) for more details.
- ProseMirror is a framework platform that seems to be the goto for using as the basis of new application specific rich text editors. It will be interesting to see if good standalone editors built on top of ProseMirror start to emerge over time.

## Resources

Some lists of rich text editors I've looked through:

- [html-editors](https://gist.github.com/manigandham/65543a0bc2bf7006a487)
- [awesome-wysiwyg](https://github.com/JefMari/awesome-wysiwyg)
- [Open source collaborative text editors](https://juretriglav.si/open-source-collaborative-text-editors/)