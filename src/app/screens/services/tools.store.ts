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
      path: 'pdf/compress',
      apiPath: 'compress/pdf',
      icon: 'compress',
      keywords: ['compress', 'pdf'],
    },
    {
      id: 'pdf-convert',
      label: 'Convert PDF',
      path: 'pdf/convert',
      apiPath: 'convert/pdf',
      icon: 'file_copy',
      keywords: ['convert', 'pdf'],
    },
    {
      id: 'pdf-merge',
      label: 'Merge PDF',
      path: 'pdf/merge',
      disabled: true,
      keywords: ['merge', 'pdf'],
    },
    {
      id: 'pdf-create',
      label: 'Create PDF',
      path: 'pdf/create',
      icon: 'picture_as_pdf',
      disabled: true,
      keywords: ['create', 'pdf'],
    },
    {
      id: 'pdf-edit',
      label: 'Edit PDF',
      path: 'pdf/edit',
      icon: 'edit_note',
      disabled: true,
      keywords: ['edit', 'pdf'],
    },
    {
      id: 'image-compress',
      label: 'Compress Image',
      path: 'image/compress',
      icon: 'compress',
      keywords: ['compress', 'image'],
    },
    {
      id: 'image-convert',
      label: 'Convert Image',
      path: 'image/convert',
      icon: 'file_copy',
      keywords: ['convert', 'image'],
    },
    {
      id: 'image-resize',
      label: 'Resize',
      path: 'image/resize',
      icon: 'crop',
      disabled: true,
      keywords: ['resize', 'image'],
    },
    {
      id: 'image-filters',
      label: 'Apply Filters',
      path: 'image/filters',
      icon: 'filter',
      disabled: true,
      keywords: ['filter', 'image'],
    },
    {
      id: 'image-collage',
      label: 'Make Collage',
      path: 'image/collage',
      icon: 'add_photo',
      disabled: true,
      keywords: ['collage', 'image'],
    },
    {
      id: 'image-edit',
      label: 'Edit Image',
      path: 'image/edit',
      icon: 'edit_note',
      disabled: true,
      keywords: ['edit', 'image'],
    },
    {
      id: 'audio-compress',
      label: 'Compress Audio',
      path: 'audio/compress',
      icon: 'compress',
      keywords: ['compress', 'audio'],
    },
    {
      id: 'audio-convert',
      label: 'Convert Audio',
      path: 'audio/convert',
      icon: 'file_copy',
      keywords: ['convert', 'audio'],
    },
    {
      id: 'audio-crop',
      label: 'Crop Audio',
      path: 'audio/crop',
      icon: 'content_cut',
      disabled: true,
      keywords: ['crop', 'audio'],
    },
  ],
};
