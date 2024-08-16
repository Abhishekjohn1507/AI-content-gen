export default [
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on yout blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required:true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: 'Enter your youtube video topic keyowords',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },
    {

        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'blog',
       
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',
       
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'instagram',
       
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required:true
            },
           
        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'code-bug-detector',
       
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required:true
            },
           
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketting',
       
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketting',
       
        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },

    {
        "name": "Youtube Script",
        "desc": "An AI tool that generates Youtube Script based on your blog information.",
        "category": "Blog",
        "icon": "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
        "aiPromt": "Give me YouTube script in proper format based on the given niche and outline topic and provide the result in Rich Text Editor format.",
        "slug": "generate-youtube-script",
        "form": [
            {
                "label": "Enter Your Script Niche",
                "field": "input",
                "name": "niche",
                "required": true
            },
            {
                "label": "Enter Script Outline",
                "field": "textarea",
                "name": "outline"
            }
        ]
    },
    {
        "name": "Social Media Post",
        "desc": "An AI tool that generates engaging social media posts.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/733/733547.png",
        "aiPromt": "Generate 5 social media post ideas in bullet points based on the provided product or service details. Provide the result in Rich Text Editor format.",
        "slug": "generate-social-media-post",
        "form": [
            {
                "label": "Enter Product/Service Details",
                "field": "textarea",
                "name": "details",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Email Newsletter",
        "desc": "An AI tool that creates captivating email newsletters tailored to your needs.",
        "category": "Email",
        "icon": "https://cdn-icons-png.flaticon.com/128/888/888853.png",
        "aiPromt": "Generate an email newsletter based on the provided topic and audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-email-newsletter",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience",
                
            }
        ]
    },
    {
        "name": "Product Description",
        "desc": "An AI tool that generates detailed product descriptions.",
        "category": "E-commerce",
        "icon": "https://cdn-icons-png.flaticon.com/128/1091/1091028.png",
        "aiPromt": "Generate 3 product descriptions in bullet points based on the given product details. Provide the result in Rich Text Editor format.",
        "slug": "generate-product-description",
        "form": [
            {
                "label": "Enter Product Name",
                "field": "input",
                "name": "product_name",
                "required": true
            },
            {
                "label": "Enter Product Features",
                "field": "textarea",
                "name": "product_features",
                
            }
        ]
    },
    {
        "name": "Ad Copy",
        "desc": "An AI tool that crafts compelling ad copies tailored to your advertisement needs.",
        "category": "Advertising",
        "icon": "https://cdn-icons-png.flaticon.com/128/3421/3421515.png",
        "aiPromt": "Generate 3 ad copies in bullet points based on the provided product/service and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-ad-copy",
        "form": [
            {
                "label": "Enter Product/Service",
                "field": "input",
                "name": "product_service",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "SEO Meta Descriptions",
        "desc": "An AI tool that creates SEO-friendly meta descriptions for your webpages.",
        "category": "SEO",
        "icon": "https://cdn-icons-png.flaticon.com/128/1242/1242735.png",
        "aiPromt": "Generate 3 SEO meta descriptions in bullet points based on the provided page title and keywords. Provide the result in Rich Text Editor format.",
        "slug": "generate-seo-meta-descriptions",
        "form": [
            {
                "label": "Enter Page Title",
                "field": "input",
                "name": "page_title",
                "required": true
            },
            {
                "label": "Enter Keywords",
                "field": "textarea",
                "name": "keywords"
            }
        ]
    }
    ,{
        "name": "YouTube SEO Keywords",
        "desc": "An AI tool that generates SEO keywords for your YouTube videos.",
        "category": "SEO",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        "aiPromt": "Generate 10 SEO keywords in bullet points based on the provided video topic and description. Provide the result in Rich Text Editor format.",
        "slug": "generate-youtube-seo-keywords",
        "form": [
            {
                "label": "Enter Video Topic",
                "field": "input",
                "name": "video_topic",
                "required": true
            },
            {
                "label": "Enter Video Description",
                "field": "textarea",
                "name": "video_description"
            }
        ]
    },
    {
        "name": "Instagram Keywords",
        "desc": "An AI tool that generates relevant keywords for Instagram posts.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384063.png",
        "aiPromt": "Generate 10 Instagram keywords in bullet points based on the provided post content and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-instagram-keywords",
        "form": [
            {
                "label": "Enter Post Content",
                "field": "textarea",
                "name": "post_content",
                "required": true
            },
            {
                "label": "Enter Target Audience",
                "field": "input",
                "name": "target_audience"
            }
        ]
    },
    {
        "name": "Landing Page Copy",
        "desc": "An AI tool that generates high-converting landing page copy.",
        "category": "Web",
        "icon": "https://cdn-icons-png.flaticon.com/128/4306/4306787.png",
        "aiPromt": "Generate landing page copy in bullet points based on the provided product/service details and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-landing-page-copy",
        "form": [
            {
                "label": "Enter Product/Service Details",
                "field": "textarea",
                "name": "details",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Facebook Ad Headlines",
        "desc": "An AI tool that generates attention-grabbing headlines for Facebook ads.",
        "category": "Advertising",
        "icon": "https://cdn-icons-png.flaticon.com/128/124/124010.png",
        "aiPromt": "Generate 5 Facebook ad headlines in bullet points based on the provided product/service and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-facebook-ad-headlines",
        "form": [
            {
                "label": "Enter Product/Service",
                "field": "input",
                "name": "product_service",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Twitter Posts",
        "desc": "An AI tool that generates engaging Twitter posts based on your inputs.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/124/124021.png",
        "aiPromt": "Generate 5 Twitter posts in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-twitter-posts",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "LinkedIn Post Ideas",
        "desc": "An AI tool that generates professional LinkedIn post ideas.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/174/174857.png",
        "aiPromt": "Generate 5 LinkedIn post ideas in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-linkedin-post-ideas",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Pinterest Pins",
        "desc": "An AI tool that generates most creative Pinterest pin ideas.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/174/174863.png",
        "aiPromt": "Generate 5 Pinterest pin ideas in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-pinterest-pins",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Quora Answers",
        "desc": "An AI tool that generates insightful answers for Quora questions.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/733/733585.png",
        "aiPromt": "Generate 3 Quora answers in bullet points based on the provided question and context. Provide the result in Rich Text Editor format.",
        "slug": "generate-quora-answers",
        "form": [
            {
                "label": "Enter Quora Question",
                "field": "textarea",
                "name": "question",
                "required": true
            },
            {
                "label": "Provide Context",
                "field": "textarea",
                "name": "context"
            }
        ]
    },
    {
        "name": "Reddit Posts",
        "desc": "An AI tool that generates engaging Reddit posts based on your inputs.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/2111/2111589.png",
        "aiPromt": "Generate 5 Reddit post ideas in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-reddit-posts",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    }
    ,
    {
        "name": "TikTok Content Ideas",
        "desc": "An AI tool that generates creative content ideas for TikTok.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/3046/3046122.png",
        "aiPromt": "Generate 5 TikTok content ideas in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-tiktok-content-ideas",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Podcast Episode Ideas",
        "desc": "An AI tool that generates engaging podcast episode ideas.",
        "category": "Podcast",
        "icon": "https://cdn-icons-png.flaticon.com/128/891/891462.png",
        "aiPromt": "Generate 5 podcast episode ideas in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-podcast-episode-ideas",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Webinar Topics",
        "desc": "An AI tool that generates well engaging webinar topic ideas.",
        "category": "Webinar",
        "icon": "https://cdn-icons-png.flaticon.com/128/1086/1086933.png",
        "aiPromt": "Generate 5 webinar topic ideas in bullet points based on the provided theme and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-webinar-topics",
        "form": [
            {
                "label": "Enter Theme",
                "field": "input",
                "name": "theme",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "E-book Title Ideas",
        "desc": "An AI tool that generates captivating title ideas for your e-book.",
        "category": "E-book",
        "icon": "https://cdn-icons-png.flaticon.com/128/2097/2097274.png",
        "aiPromt": "Generate 5 e-book title ideas in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-ebook-title-ideas",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Whitepaper Topics",
        "desc": "An AI tool that generates comprehensive whitepaper topic ideas.",
        "category": "Whitepaper",
        "icon": "https://cdn-icons-png.flaticon.com/128/1063/1063614.png",
        "aiPromt": "Generate 5 whitepaper topic ideas in bullet points based on the provided industry and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-whitepaper-topics",
        "form": [
            {
                "label": "Enter Industry",
                "field": "input",
                "name": "industry",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Press Release",
        "desc": "An AI tool that generates professional press releases based on your inputs.",
        "category": "Press",
        "icon": "https://cdn-icons-png.flaticon.com/128/1043/1043483.png",
        "aiPromt": "Generate a press release in bullet points based on the provided event details and company information. Provide the result in Rich Text Editor format.",
        "slug": "generate-press-release",
        "form": [
            {
                "label": "Enter Event Details",
                "field": "textarea",
                "name": "event_details",
                "required": true
            },
            {
                "label": "Enter Company Information",
                "field": "textarea",
                "name": "company_info"
            }
        ]
    },
    {
        "name": "Job Description",
        "desc": "An AI tool that generates detailed job descriptions based on your inputs.",
        "category": "HR",
        "icon": "https://cdn-icons-png.flaticon.com/128/1184/1184635.png",
        "aiPromt": "Generate a job description in bullet points based on the provided job title and requirements. Provide the result in Rich Text Editor format.",
        "slug": "generate-job-description",
        "form": [
            {
                "label": "Enter Job Title",
                "field": "input",
                "name": "job_title",
                "required": true
            },
            {
                "label": "Enter Job Requirements",
                "field": "textarea",
                "name": "job_requirements",
                "required": true
            }
        ]
    },
]