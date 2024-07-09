export default [
    {
      name: "Blog Title",
      desc: "An AI tool that generates blog titles based on your blog information.",
      category: "Blog",
      icon: 'https://cdn-icons-png.flaticon.com/128/3959/3959542.png',
      aiPrompt: 'Give me 5 blog topic ideas in bullet points only based on the given niche & outline topic and give me the result in Rich Text Editor format.',
      slug: 'generate-blog-title',
      form: [
        {
          label: 'Enter your blog niche',
          field: 'input',
          name: 'niche',
          required: true
        },
        {
          label: 'Enter blog outline',
          field: 'textarea',
          name: 'outline',
          required: false
        },
      ]
    },
    {
      name: "Blog Content",
      desc: "An AI tool that generates blog content based on your topic.",
      category: "Blog",
      icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
      aiPrompt: 'Generate detailed blog content based on the given topic and outline.',
      slug: 'generate-blog-content',
      form: [
        {
          label: 'Enter your blog topic',
          field: 'input',
          name: 'topic',
          required: true
        },
        {
          label: 'Enter blog outline here',
          field: 'textarea',
          name: 'outline',
          required: false
        },
      ]
    },
    {
      name: "Blog Topic Ideas",
      desc: "An AI tool that provides blog topic ideas based on your niche.",
      category: "Blog",
      icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
      aiPrompt: 'Generate top 5 blog topic ideas in bullet points only, (no Description) vased on niche in rich text editor format.',
      slug: 'generate-blog-topic-ideas',
      form: [
        {
          label: 'Enter your blog niche',
          field: 'input',
          name: 'niche',
          required: true
        },
      ]
    },
    {
      name: "YouTube SEO Title",
      desc: "An AI tool that generates SEO-friendly YouTube titles based on your video information.",
      category: "YouTube",
      icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
      aiPrompt: 'Generate 5 SEO-friendly YouTube titles based on the given video topic and keywords.',
      slug: 'generate-youtube-seo-title',
      form: [
        {
          label: 'Enter your youtube video topic keyowords',
          field: 'input',
          name: 'topic',
          required: true
        },
        {
          label: 'Enter youtube description Outline here',
          field: 'textarea',
          name: 'outline',
          required: false
        },
      ]
    },
    {
      name: "YouTube Description",
      desc: "An AI tool that generates YouTube video descriptions based on your video information.",
      category: "YouTube",
      icon: 'https://cdn-icons-png.flaticon.com/128/174/174883.png',
      aiPrompt: 'Generate a detailed YouTube video description based on the given video topic and outline.',
      slug: 'generate-youtube-description',
      form: [
        {
          label: 'Enter your blog topic/title',
          field: 'input',
          name: 'title',
          required: true
        },
        {
          label: 'Enter video outline',
          field: 'textarea',
          name: 'outline',
          required: false
        },
      ]
    },
    {
      name: "YouTube Tags",
      desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
      category: "YouTube",
      icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
      aiPrompt: 'Generate a list of 20 YouTube video tags based on the given video topic and keywords.',
      slug: 'generate-youtube-tags',
      form: [
        {
          label: 'Enter your youtube title',
          field: 'input',
          name: 'title',
          required: true
        },
        {
          label: 'Enter youtube video outline here (Optional)',
          field: 'textarea',
          name: 'outline',
          required: false
        },
      ]
    },
    {
      name: "Rewrite Article (Plagiarism Free)",
      desc: "An AI tool that rewrites articles to make them plagiarism-free.",
      category: "Writing",
      icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
      aiPrompt: 'Rewrite the given article to make it plagiarism-free.',
      slug: 'rewrite-article',
      form: [
        {
          label: 'Enter your article',
          field: 'textarea',
          name: 'article',
          required: true
        },
      ]
    },
    {
      name: "Text Improver",
      desc: "An AI tool that improves the quality of the given text.",
      category: "Writing",
      icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
      aiPrompt: 'Improve the quality of the given text.',
      slug: 'text-improver',
      form: [
        {
          label: 'Enter your text',
          field: 'textarea',
          name: 'text',
          required: true
        },
      ]
    },
    {
      name: "Add Emojis to Text",
      desc: "An AI tool that adds relevant emojis to your text.",
      category: "Writing",
      icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
      aiPrompt: 'Add relevant emojis to the given text.',
      slug: 'add-emojis-to-text',
      form: [
        {
          label: 'Enter your text',
          field: 'textarea',
          name: 'text',
          required: true
        },
      ]
    },
    {
      name: "Instagram Post Generator",
      desc: "An AI tool that generates Instagram posts based on your input.",
      category: "Instagram",
      icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
      aiPrompt: 'Generate an Instagram post based on the given topic and outline.',
      slug: 'generate-instagram-post',
      form: [
        {
          label: 'Enter keywords for your post',
          field: 'input',
          name: 'topic',
          required: true
        }
      ]
    },
    {
      name: "Instagram Hashtag Generator",
      desc: "An AI tool that generates Instagram hashtags based on your topic.",
      category: "Instagram",
      icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
      aiPrompt: 'Generate a list of 30 Instagram hashtags based on the given topic.',
      slug: 'generate-instagram-hashtags',
      form: [
        {
          label: 'Enter your topic',
          field: 'input',
          name: 'topic',
          required: true
        },
      ]
    },
    {
      name: "Instagram Post/Reel Idea",
      desc: "An AI tool that generates ideas for Instagram posts or reels based on your topic.",
      category: "Instagram",
      icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
      aiPrompt: 'Provide 5 ideas for Instagram posts or reels based on the given topic.',
      slug: 'generate-instagram-post-reel-ideas',
      form: [
        {
          label: 'Enter your topic',
          field: 'input',
          name: 'topic',
          required: true
        },
      ]
    },
    {
      name: "English Grammar Check",
      desc: "An AI tool that checks the grammar of the given text.",
      category: "Writing",
      icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
      aiPrompt: 'Check the grammar of the given text and provide corrections.',
      slug: 'english-grammar-check',
      form: [
        {
          label: 'Enter your text',
          field: 'textarea',
          name: 'text',
          required: true
        },
      ]
    },
    {
      name: "Write Code",
      desc: "An AI tool that writes code based on the given requirements.",
      category: "Coding",
      icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
      aiPrompt: 'Write code based on the given requirements.',
      slug: 'write-code',
      form: [
        {
          label: 'Enter your requirements',
          field: 'textarea',
          name: 'requirements',
          required: true
        },
      ]
    },
    {
      name: "Explain Code",
      desc: "An AI tool that explains the given code.",
      category: "Coding",
      icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
      aiPrompt: 'Explain the given code.',
      slug: 'explain-code',
      form: [
        {
          label: 'Enter your code',
          field: 'textarea',
          name: 'code',
          required: true
        },
      ]
    },
    {
      name: "Code Bug Detector",
      desc: "An AI tool that detects bugs in the given code.",
      category: "Coding",
      icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
      aiPrompt: 'Detect bugs in the given code.',
      slug: 'code-bug-detector',
      form: [
        {
          label: 'Enter your code',
          field: 'textarea',
          name: 'code',
          required: true
        },
      ]
    },
    {
      name: "Tagline Generator",
      desc: "An AI tool that generates taglines based on your product or service.",
      category: "Marketing",
      icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
      aiPrompt: 'Generate 5 taglines based on the given product or service description.',
      slug: 'generate-tagline',
      form: [
        {
          label: 'Enter your product/service description',
          field: 'textarea',
          name: 'description',
          required: true
        },
      ]
    },
    {
      name: "Product Description",
      desc: "An AI tool that generates product descriptions based on your product information.",
      category: "Marketing",
      icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
      aiPrompt: 'Generate a product description based on the given product information.',
      slug: 'generate-product-description',
      form: [
        {
          label: 'Enter your product name',
          field: 'input',
          name: 'productName',
          required: true
        },
        {
          label: 'Enter product features',
          field: 'textarea',
          name: 'features',
          required: false
        },
      ]
    },
    {
      name: "Financial Tips",
      desc: "An AI tool that writes finance tips based on your questions.",
      category: "Finance",
      icon: 'https://cdn-icons-png.flaticon.com/128/4844/4844315.png',
      aiPrompt: 'Write finance tips based on your question.',
      slug: 'financial-tips',
      form: [
        {
          label: 'Enter your requirements',
          field: 'textarea',
          name: 'requirements',
          required: true
        },
      ]
    },
  ]

