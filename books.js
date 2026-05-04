const books = [
    // 📘 BIOGRAPHY
    {
        id: "born-a-crime",
        title: "Born a Crime",
        category: "Biography",
        price: 450,
        image: "../assets/Biography/born-a-crime.jpg",
        author: "Trevor Noah",
        description: "A deeply personal memoir that explores Trevor Noah's life from his childhood to his years as a comedian and host. It highlights resilience, ambition, identity, and the balance between personal dreams and public expectations.",
        bestseller: true
    },
    {
        id: "becoming",
        title: "Becoming",
        category: "Biography",
        price: 450,
        image: "../assets/Biography/becoming.jpg",
        author: "Michelle Obama",
        description: "A deeply personal memoir that explores Michelle Obama's life from her childhood to her years as First Lady. It highlights resilience, ambition, identity, and the balance between personal dreams and public expectations."
    },
    {
        id: "annefrank",
        title: "The Diary of a Young Girl",
        category: "Biography",
        price: 300,
        image: "../assets/Biography/diary-of-young-girl.jpg",
        author: "Anne Frank",
        description: "A powerful and emotional diary documenting Anne Frank’s life in hiding during World War II. It reflects hope, fear, and the strength of the human spirit in the face of adversity."
    },
    {
        id: "educated",
        title: "Educated",
        category: "Biography",
        price: 420,
        image: "../assets/Biography/educated.jpg",
        author: "Tara Westover",
        description: "A powerful memoir about a woman who grows up in a strict and abusive household in rural Idaho with no formal education. Tara Westover's journey from isolation to earning a PhD from Cambridge University is a remarkable story of self-invention, resilience, and the transformative power of education."
    },
    {
        id: "longwalk",
        title: "Long Walk to Freedom",
        category: "Biography",
        price: 450,
        image: "../assets/Biography/long-walk-to-freedom.jpg",
        author: "Nelson Mandela",
        description: "An inspiring autobiography that chronicles Nelson Mandela’s life from his early years to his long imprisonment and eventual role as South Africa’s first Black president. It offers deep insights into the struggle against apartheid, leadership, sacrifice, and the enduring fight for equality and justice."
    },
    {
        id: "malala",
        title: "I Am Malala",
        category: "Biography",
        price: 380,
        image: "../assets/Biography/malala.jpg",
        author: "Malala Yousafzai",
        description: "The extraordinary story of a young girl who stood up for education and was targeted by extremists. Malala’s journey from a small town in Pakistan to becoming the youngest Nobel Prize laureate highlights courage, advocacy, and the importance of education for all."
    },
    {
        id: "stevejobs",
        title: "Steve Jobs",
        category: "Biography",
        price: 500,
        image: "../assets/Biography/steve-jobs.jpg",
        author: "Walter Isaacson",
        description: "A comprehensive biography of Steve Jobs that explores his innovative vision, complex personality, and relentless drive for perfection. Based on extensive interviews, the book provides insight into the creation of Apple and the mindset behind groundbreaking technological advancements."
    },

    // 🧙 FANTASY
    {
        id: "got",
        title: "A Game of Thrones",
        category: "Fantasy",
        price: 359,
        image: "../assets/Fantasy/agameofthrones.jpg",
        author: "George R. R. Martin",
        bestseller: true,
        description: "An epic tale of power, betrayal, and political intrigue set in the fictional world of Westeros. With complex characters and unpredictable twists, it explores the harsh realities of ambition and leadership."
    },
    {
        id: "harrypotter1",
        title: "Harry Potter and the Sorcerer’s Stone",
        category: "Fantasy",
        price: 399,
        image: "../assets/Fantasy/harrypotter1.jpg",
        author: "J.K. Rowling",
        description: "The beginning of Harry Potter’s magical journey as he discovers his identity and enters the wizarding world. A story of friendship, courage, and destiny."
    },
    {
        id: "hobbit",
        title: "The Hobbit",
        category: "Fantasy",
        price: 320,
        image: "../assets/Fantasy/hobbit.jpg",
        author: "J.R.R. Tolkien",
        description: "A timeless adventure of Bilbo Baggins, who embarks on a journey filled with danger, treasure, and self-discovery in a richly imagined fantasy world."
    },
    {
        id: "nameofthewind",
        title: "The Name of the Wind",
        category: "Fantasy",
        price: 450,
        image: "../assets/Fantasy/name-of-the-wind.jpg",
        author: "Patrick Rothfuss",
        description: "A beautifully written fantasy novel that follows Kvothe, a gifted young man who grows into a legendary figure. The story blends magic, music, and mystery while exploring themes of ambition, identity, and the cost of greatness through a deeply immersive narrative."
    },
    {
        id: "priory",
        title: "The Priory of the Orange Tree",
        category: "Fantasy",
        price: 520,
        image: "../assets/Fantasy/prioryoftheorangetree.jpg",
        author: "Samantha Shannon",
        bestseller: true,
        description: "An epic standalone fantasy featuring dragons, political intrigue, and powerful female protagonists. It weaves multiple perspectives into a rich world where ancient legends and modern conflicts collide, exploring loyalty, faith, and courage."
    },


    // 📖 FICTION
    {
        id: "alchemist",
        title: "The Alchemist",
        category: "Fiction",
        price: 499,
        image: "../assets/Fiction/alchemist.jpg",
        author: "Paulo Coelho",
        description: "A philosophical story about following one’s dreams and discovering purpose. It emphasizes listening to the heart and recognizing opportunities in life."
    },
    {
        id: "davinci",
        title: "The Da Vinci Code",
        category: "Fiction",
        price: 420,
        image: "../assets/Fiction/davincicode.jpg",
        author: "Dan Brown",
        description: "A gripping thriller that blends art, history, and conspiracy. It follows a symbologist uncovering hidden secrets within famous works of art."
    },
    {
        id: "lifeofpi",
        title: "Life of Pi",
        category: "Fiction",
        price: 350,
        image: "../assets/Fiction/lifeofpi.jpg",
        author: "Yann Martel",
        description: "A survival story of a boy stranded at sea with a tiger. It explores faith, imagination, and the nature of storytelling."
    },
    {
        id: "fourthwing",
        title: "Fourth Wing",
        category: "Fantasy",
        price: 480,
        image: "../assets/Fiction/fourthwing.jpg",
        author: "Rebecca Yarros",
        description: "A gripping fantasy set in a brutal war college for dragon riders. The story follows Violet Sorrengail as she navigates deadly challenges, alliances, and romance in a high-stakes environment where survival requires both strength and intelligence."
    },
    {
        id: "itendswithus",
        title: "It Ends With Us",
        category: "Fiction",
        price: 399,
        image: "../assets/Fiction/itendswithus.jpg",
        author: "Colleen Hoover",
        bestseller: true,
        description: "A deeply emotional novel that explores love, relationships, and difficult choices. It tells the story of Lily Bloom as she navigates a complex relationship that challenges her understanding of love, strength, and self-worth."
    },
    {
        id: "silentpatient",
        title: "The Silent Patient",
        category: "Thriller",
        price: 420,
        image: "../assets/Thriller/silentpatient.jpg",
        author: "Alex Michaelides",
        description: "A psychological thriller centered around Alicia Berenson, a woman who shoots her husband and then stops speaking. A therapist becomes obsessed with uncovering the truth, leading to shocking twists and a gripping exploration of trauma and perception."
    },
    {
        id: "youarehere",
        title: "You Are Here",
        category: "Fiction",
        price: 340,
        image: "../assets/Fiction/urhere.jpg",
        author: "David Nicholls",
        description: "A reflective and character-driven story about two strangers brought together by circumstance. It explores loneliness, connection, and personal growth through a journey that becomes both physical and emotional."
    },
    {
        id: "womaninme",
        title: "Woman Down",
        category: "Fiction",
        price: 330,
        image: "../assets/Fiction/womandown.jpg",
        author: "Unknown",
        description: "A contemporary story that explores themes of identity, struggle, and resilience. It focuses on a woman navigating personal challenges and societal expectations while trying to rebuild her life."
    },

    // 💰 FINANCE
    {
        id: "richdad",
        title: "Rich Dad Poor Dad",
        category: "Finance",
        price: 380,
        image: "../assets/Finance/richdad.jpg",
        author: "Robert Kiyosaki",
        description: "A financial literacy guide contrasting two mindsets about money. It teaches investing, asset-building, and breaking free from traditional financial thinking."
    },
    {
        id: "psychologymoney",
        title: "The Psychology of Money",
        category: "Finance",
        price: 410,
        image: "../assets/Finance/psyofmoney.jpg",
        author: "Morgan Housel",
        description: "Explains how behavior and emotions influence financial decisions. It focuses on long-term thinking and disciplined money habits."
    },
    {
        id: "leanstartup",
        title: "The Lean Startup",
        category: "Finance",
        price: 450,
        image: "../assets/Finance/leanstartup.jpg",
        author: "Eric Ries",
        description: "A modern guide to building successful startups using continuous innovation and validated learning. It introduces practical methods for testing ideas, reducing risk, and efficiently developing products in uncertain environments."
    },
    {
        id: "simplewealth",
        title: "The Simple Path to Wealth",
        category: "Finance",
        price: 380,
        image: "../assets/Finance/simplewaytowealth.jpg",
        author: "JL Collins",
        description: "A straightforward guide to financial independence through smart investing and disciplined saving. It simplifies complex financial concepts and emphasizes long-term strategies for building sustainable wealth."
    },
    {
        id: "thinkgrow",
        title: "Think and Grow Rich",
        category: "Finance",
        price: 350,
        image: "../assets/Finance/thinkandgrowrich.jpg",
        author: "Napoleon Hill",
        description: "A classic self-help book that explores the mindset and habits required for success. It focuses on goal-setting, persistence, and belief systems as key drivers of personal and financial achievement."
    },
    {
        id: "zerotoone",
        title: "Zero to One",
        category: "Finance",
        price: 420,
        image: "../assets/Finance/zerotoone.jpg",
        author: "Peter Thiel",
        description: "A thought-provoking book about innovation and building unique businesses. It encourages entrepreneurs to create new markets rather than compete in existing ones, emphasizing originality and long-term vision."
    },

    // 😱 HORROR
    {
        id: "kingsorrow",
        title: "King Sorrow",
        category: "Horror",
        price: 299,
        image: "../assets/Horror/kingsorrow.jpg",
        author: "Unknown",
        description: "A suspenseful horror narrative that builds tension through psychological fear and dark storytelling, keeping readers engaged till the end."
    },
    {
        id: "libraryathell",
        title: "The Library at Hellebore",
        category: "Horror",
        price: 320,
        image: "../assets/Horror/library athellborn.jpg",
        author: "Cassandra Khaw",
        description: "A dark and eerie tale set in a mysterious library that holds forbidden knowledge and cursed texts. As the protagonist uncovers hidden secrets, the line between reality and the supernatural begins to blur, creating a chilling atmosphere filled with suspense, dread, and psychological tension."
    },
    {
        id: "mexicangothic",
        title: "Mexican Gothic",
        category: "Horror",
        price: 399,
        image: "../assets/Horror/mexican gothic.jpg",
        author: "Silvia Moreno-Garcia",
        description: "A haunting gothic horror novel set in a decaying mansion in rural Mexico. The story follows Noemí Taboada as she investigates her cousin’s disturbing claims, uncovering dark family secrets, eerie hallucinations, and a terrifying presence lurking within the walls."
    },
    {
        id: "youlikeitdarker",
        title: "You Like It Darker",
        category: "Horror",
        price: 450,
        image: "../assets/Horror/u like it darker.jpg",
        author: "Stephen King",
        description: "A collection of gripping short stories that delve into fear, the supernatural, and the darker side of human nature. Each story presents a unique and unsettling scenario, blending psychological horror with unexpected twists that keep readers on edge."
    },

    // 🌱 PERSONAL DEVELOPMENT
    {
        id: "atomic",
        title: "Atomic Habits",
        category: "Personal Development",
        price: 329,
        image: "../assets/Personal Development/atomichabits.jpg",
        author: "James Clear",
        description: "A practical guide on habit formation using small, consistent improvements. It focuses on systems and long-term behavioral change."
    },
    {
        id: "ikigai",
        title: "Ikigai",
        category: "Personal Development",
        price: 300,
        image: "../assets/Personal Development/ikigai.jpg",
        author: "Héctor García",
        description: "Explores the Japanese concept of purpose and fulfillment. It connects passion, profession, and happiness for a meaningful life."
    },
    {
        id: "courage",
        title: "The Courage to Be Disliked",
        category: "Personal Development",
        price: 350,
        image: "../assets/Personal Development/couragetobedisliked.jpg",
        author: "Ichiro Kishimi & Fumitake Koga",
        description: "A thought-provoking book presented as a dialogue between a philosopher and a young man. It explores Adlerian psychology and challenges conventional beliefs about happiness, relationships, and self-worth. The book encourages readers to let go of past burdens and societal expectations to live a truly free and fulfilling life."
    },
    {
        id: "deepwork",
        title: "Deep Work",
        category: "Personal Development",
        price: 420,
        image: "../assets/Personal Development/deepwork.jpg",
        author: "Cal Newport",
        description: "A practical guide to achieving success through focused and distraction-free work. The book explains how cultivating deep concentration can lead to higher productivity, better learning, and meaningful accomplishments in a world filled with constant digital distractions."
    },

    // 🔪 THRILLER
    {
        id: "gonegirl",
        title: "Gone Girl",
        category: "Thriller",
        price: 390,
        image: "../assets/Thriller/gonegirl.jpg",
        author: "Gillian Flynn",
        bestseller: true,
        description: "A psychological thriller about marriage, deception, and media manipulation. Known for its unexpected twists and dark themes."
    },
    {
        id: "womanwindow",
        title: "The Woman in the Window",
        category: "Thriller",
        price: 390,
        image: "../assets/Thriller/womaninthewindow.jpg",
        author: "A.J. Finn",
        description: "A psychological thriller about an agoraphobic woman who spends her days observing her neighbors from her window. When she believes she witnesses a crime, her reality begins to unravel, leading to a suspenseful narrative filled with twists, unreliable perception, and tension."
    },

    // 📚 MANGA
    {
        id: "apothecary",
        title: "The Apothecary Diaries",
        category: "Manga",
        price: 300,
        image: "../assets/Manga/apothearydiary.jpg",
        author: "Natsu Hyuuga",
        description: "Set in an imperial court inspired by ancient China, the story follows Maomao, a clever and observant young woman trained in medicine. As she becomes entangled in palace intrigues, poisons, and secrets, her sharp intellect helps uncover hidden truths while navigating complex political and social dynamics."
    },
    {
        id: "bluebox",
        title: "Blue Box",
        category: "Manga",
        price: 280,
        image: "../assets/Manga/blubox.jpg",
        author: "Kouji Miura",
        description: "A refreshing blend of sports and romance, Blue Box follows Taiki, a badminton player, and his growing feelings for Chinatsu, a basketball star. The story beautifully captures youthful ambition, dedication, and the emotional complexities of first love."
    },
    {
        id: "fragrantflower",
        title: "The Fragrant Flower Blooms with Dignity",
        category: "Manga",
        price: 290,
        image: "../assets/Manga/fragrant flowers.jpg",
        author: "Saka Mikami",
        description: "A heartwarming story about unlikely friendships and breaking social barriers. It follows Rintaro and Kaoruko, students from completely different schools, as they form a bond that challenges stereotypes and explores kindness, acceptance, and personal growth."
    },
    {
        id: "kagurabachi",
        title: "Kagurabachi",
        category: "Manga",
        price: 270,
        image: "../assets/Manga/kakurabachi.jpg",
        author: "Takeru Hokazono",
        description: "An action-packed manga centered on revenge and swordsmanship. It follows Chihiro, a young man seeking justice using enchanted blades forged by his father, combining intense battles with emotional depth and themes of loss and purpose."
    },
    {
        id: "sakamotodays",
        title: "Sakamoto Days",
        category: "Manga",
        price: 260,
        image: "../assets/Manga/sakamatadays.jpg",
        author: "Yuto Suzuki",
        description: "A unique action-comedy about a former legendary hitman who leaves his violent past behind to run a convenience store. Despite his peaceful life, danger constantly finds him, leading to exciting action sequences mixed with humor and heartwarming moments."
    },
    {
        id: "naruto",
        title: "Naruto Vol. 1",
        category: "Manga",
        price: 250,
        image: "../assets/Manga/naruto.jpg",
        author: "Masashi Kishimoto",
        description: "Follows Naruto Uzumaki, a young ninja striving to gain recognition and become the strongest leader of his village."
    },
    {
        id: "onepiece",
        title: "One Piece Vol. 1",
        category: "Manga",
        price: 260,
        image: "../assets/Manga/onepiece.jpg",
        author: "Eiichiro Oda",
        description: "An adventurous journey of Monkey D. Luffy and his crew in search of the ultimate treasure, filled with action, humor, and friendship."
    },
    {
        id: "aot",
        title: "Attack on Titan Vol. 1",
        category: "Manga",
        price: 270,
        image: "../assets/Manga/aot.jpg",
        author: "Hajime Isayama",
        description: "A dark and intense story set in a world where humanity fights for survival against giant humanoid creatures known as Titans."
    },

    // 📚 ROMANCE
    {
        id: "fiftyshades",
        title: "Fifty Shades of Grey",
        category: "Romance",
        price: 420,
        image: "../assets/Romance/fiftyshadesofgrey.jpg",
        author: "E.L. James",
        description: "A controversial and widely popular romance novel that explores the intense and complex relationship between Anastasia Steele and Christian Grey. It delves into themes of desire, control, emotional vulnerability, and the blurred lines between love and obsession."
    },
    {
        id: "funnystory",
        title: "Funny Story",
        category: "Romance",
        price: 380,
        image: "../assets/Romance/funnystory.jpg",
        author: "Emily Henry",
        description: "A contemporary romance that blends humor and emotional depth. It follows two individuals navigating heartbreak and unexpected companionship, exploring themes of healing, friendship, and second chances in love."
    },
    {
        id: "greatbeautiful",
        title: "Great Big Beautiful Life",
        category: "Romance",
        price: 400,
        image: "../assets/Romance/greatbeautifullife.jpg",
        author: "Emily Henry",
        description: "A heartfelt story about ambition, relationships, and self-discovery. The novel focuses on balancing personal goals with emotional connections, offering a realistic portrayal of modern love and life challenges."
    },
    {
        id: "prideprejudice",
        title: "Pride and Prejudice",
        category: "Romance",
        price: 300,
        image: "../assets/Romance/prideandprejudice.jpg",
        author: "Jane Austen",
        description: "A timeless classic that explores themes of love, class, and societal expectations through the relationship between Elizabeth Bennet and Mr. Darcy. Known for its wit and insight into human behavior, it remains one of the most celebrated romance novels."
    },
    {
        id: "notebook",
        title: "The Notebook",
        category: "Romance",
        price: 350,
        image: "../assets/Romance/thenotebook.jpg",
        author: "Nicholas Sparks",
        description: "A deeply emotional love story that spans decades, following Noah and Allie as they navigate separation, reunion, and enduring love. It highlights commitment, memory, and the power of true love."
    },
    {
        id: "twilight",
        title: "Twilight",
        category: "Romance",
        price: 370,
        image: "../assets/Romance/twilight.jpg",
        author: "Stephenie Meyer",
        description: "A supernatural romance that follows Bella Swan and her relationship with Edward Cullen, a vampire. The story combines love, danger, and fantasy elements, creating a gripping narrative about forbidden love."
    },
    {
        id: "uglylove",
        title: "Ugly Love",
        category: "Romance",
        price: 360,
        image: "../assets/Romance/uglylove.jpg",
        author: "Colleen Hoover",
        description: "A powerful emotional romance that explores the complexities of love, heartbreak, and past trauma. It follows a relationship built on rules that are eventually broken, revealing deep emotional layers and vulnerability."
    }

];