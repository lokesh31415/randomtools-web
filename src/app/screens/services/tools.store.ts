export const TOOLS_STORE = {
  /** tool groups
   * Array of groups
   * Each element contains groupID(id), label(label), array of toolID(s)(id)
   */
  groups: [
    {
      id: 'pdf',
      label: 'PDF Tools',
      tools: [
        'pdf-compress',
        'pdf-convert',
        'pdf-merge',
        'pdf-create',
        'pdf-edit',
      ],
    },
    {
      id: 'image',
      label: 'Image Tools',
      tools: [
        'image-compress',
        'image-convert',
        'image-resize',
        'image-filters',
        'image-collage',
        'image-edit',
      ],
    },
    {
      id: 'audio',
      label: 'Audio Tools',
      tools: ['audio-compress', 'audio-convert', 'audio-crop'],
    },
  ],
  /** tools
   * Array of tools
   * Each element contains toolsID(id), label(label), keywords (for search), path (url path), apiPath (API path)
   * apiPath - will be null/undefined if that particular tool is a frontend feature
   */
  tools: [
    {
      id: 'pdf-compress',
      label: 'Compress PDF',
      apiPath: 'compress/pdf',
      icon: 'compress',
      keywords: ['compress', 'pdf'],
    },
    {
      id: 'pdf-convert',
      label: 'Convert PDF',
      apiPath: 'convert/pdf',
      icon: 'file_copy',
      keywords: ['convert', 'pdf'],
    },
    {
      id: 'pdf-merge',
      label: 'Merge PDF',
      disabled: true,
      keywords: ['merge', 'pdf'],
    },
    {
      id: 'pdf-create',
      label: 'Create PDF',
      icon: 'picture_as_pdf',
      disabled: true,
      keywords: ['create', 'pdf'],
    },
    {
      id: 'pdf-edit',
      label: 'Edit PDF',
      icon: 'edit_note',
      disabled: true,
      keywords: ['edit', 'pdf'],
    },
    {
      id: 'image-compress',
      label: 'Compress Image',
      icon: 'compress',
      keywords: ['compress', 'image'],
    },
    {
      id: 'image-convert',
      label: 'Convert Image',
      icon: 'file_copy',
      disabled: true,
      keywords: ['convert', 'image'],
    },
    {
      id: 'image-resize',
      label: 'Resize',
      icon: 'crop',
      disabled: true,
      keywords: ['resize', 'image'],
    },
    {
      id: 'image-filters',
      label: 'Apply Filters',
      icon: 'filter',
      disabled: true,
      keywords: ['filter', 'image'],
    },
    {
      id: 'image-collage',
      label: 'Make Collage',
      icon: 'add_photo_alternate',
      disabled: true,
      keywords: ['collage', 'image'],
    },
    {
      id: 'image-edit',
      label: 'Edit Image',
      icon: 'edit_note',
      disabled: true,
      keywords: ['edit', 'image'],
    },
    {
      id: 'audio-compress',
      label: 'Compress Audio',
      icon: 'compress',
      disabled: true,
      keywords: ['compress', 'audio'],
    },
    {
      id: 'audio-convert',
      label: 'Convert Audio',
      icon: 'file_copy',
      disabled: true,
      keywords: ['convert', 'audio'],
    },
    {
      id: 'audio-crop',
      label: 'Crop Audio',
      icon: 'content_cut',
      disabled: true,
      keywords: ['crop', 'audio'],
    },
  ],
};
