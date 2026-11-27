/*
============================================================
LEXIFORGE — ENGLISH LEARNING DATABASE
============================================================

This file contains ONLY learning content.

To add another default card:
1. Copy one complete card object.
2. Give it a unique sourceId.
3. Change its content.
4. Keep the same structure.

The application engine is contained in index.html.
============================================================
*/

window.LEXIFORGE_DATA = [

/* ==========================================================
   01 — AMBIGUOUS
   ========================================================== */

{
    sourceId:"default_001",
    id:"default_001",
    word:"ambiguous",
    partOfSpeech:"adjective",
    translation:"غامض / ملتبس / يحتمل أكثر من تفسير",

    definition:{
        english:"Open to more than one reasonable interpretation, meaning, or conclusion; not expressed with enough precision to remove uncertainty.",
        arabic:"تُستخدم ambiguous عندما يكون الكلام أو الموقف أو الدليل قابلاً لأكثر من تفسير معقول، بحيث لا يمكن تحديد المعنى بدقة.",
        example:"The contract contains an ambiguous clause that could be interpreted in two different ways.",
        exampleTranslation:"يتضمن العقد بندًا ملتبسًا يمكن تفسيره بطريقتين مختلفتين.",
        usage:"Ambiguous usually describes language, statements, evidence, instructions, situations, or decisions. It is different from vague: vague may simply lack detail, while ambiguous specifically permits multiple interpretations."
    },

    family:[
        {
            partOfSpeech:"adjective",
            word:"ambiguous",
            meaning:"Having more than one possible interpretation.",
            arabic:"غامض أو ملتبس ويحتمل عدة تفسيرات.",
            example:"His answer was deliberately ambiguous."
        },
        {
            partOfSpeech:"noun",
            word:"ambiguity",
            meaning:"The condition of having more than one possible meaning.",
            arabic:"الغموض أو الالتباس الناتج عن تعدد المعاني.",
            example:"The ambiguity of the statement created confusion."
        },
        {
            partOfSpeech:"adverb",
            word:"ambiguously",
            meaning:"In a way that allows multiple interpretations.",
            arabic:"بطريقة غامضة أو قابلة لأكثر من تفسير.",
            example:"The instructions were written ambiguously."
        },
        {
            partOfSpeech:"related noun",
            word:"disambiguation",
            meaning:"The process of removing ambiguity by identifying the intended meaning.",
            arabic:"إزالة الالتباس وتحديد المعنى المقصود.",
            example:"The editor added a sentence for disambiguation."
        }
    ],

    synonyms:[
        {
            word:"unclear",
            explanation:"Not easy to understand or determine.",
            arabic:"غير واضح."
        },
        {
            word:"equivocal",
            explanation:"Deliberately or naturally open to different interpretations.",
            arabic:"ملتبس أو مراوغ في المعنى."
        },
        {
            word:"vague",
            explanation:"Lacking clear detail or exact boundaries.",
            arabic:"غامض أو غير محدد التفاصيل."
        }
    ],

    antonyms:[
        {
            word:"clear",
            explanation:"Easy to understand with little or no uncertainty.",
            arabic:"واضح."
        },
        {
            word:"explicit",
            explanation:"Stated directly and in a way that leaves little doubt.",
            arabic:"صريح ومباشر."
        },
        {
            word:"unambiguous",
            explanation:"Having only one clear interpretation.",
            arabic:"لا يحتمل إلا تفسيرًا واضحًا واحدًا."
        }
    ],

    dialogue:[
        {
            speaker:"A",
            english:"Did the manager approve the proposal?",
            arabic:"هل وافق المدير على المقترح؟"
        },
        {
            speaker:"B",
            english:"His response was rather ambiguous.",
            arabic:"كان رده غامضًا إلى حد ما."
        },
        {
            speaker:"A",
            english:"What exactly did he say?",
            arabic:"ماذا قال بالضبط؟"
        },
        {
            speaker:"B",
            english:"He said that the proposal might be acceptable under certain conditions.",
            arabic:"قال إن المقترح قد يكون مقبولًا في ظل شروط معينة."
        },
        {
            speaker:"A",
            english:"That sounds like approval to me.",
            arabic:"هذا يبدو لي كأنه موافقة."
        },
        {
            speaker:"B",
            english:"Not necessarily. His wording was intentionally ambiguous.",
            arabic:"ليس بالضرورة. كانت صياغته غامضة عمدًا."
        },
        {
            speaker:"A",
            english:"Then we should ask for clarification before moving forward.",
            arabic:"إذن ينبغي أن نطلب توضيحًا قبل المتابعة."
        },
        {
            speaker:"B",
            english:"Exactly. We should remove the ambiguity from the agreement.",
            arabic:"بالضبط. يجب أن نزيل الغموض من الاتفاق."
        }
    ],

    contexts:[
        {
            title:"Contract language",
            explanation:"A legal sentence is ambiguous when different parties can reasonably understand it differently.",
            example:"The payment clause is ambiguous.",
            arabic:"بند الدفع ملتبس ويمكن تفسيره بأكثر من طريقة."
        },
        {
            title:"Human communication",
            explanation:"A person's response can be ambiguous when it does not clearly reveal whether they agree or disagree.",
            example:"She gave an ambiguous response when I asked whether she would attend.",
            arabic:"قدمت ردًا غامضًا عندما سألتها إن كانت ستحضر."
        },
        {
            title:"Evidence",
            explanation:"Evidence may be ambiguous when it supports more than one interpretation.",
            example:"The evidence remains ambiguous.",
            arabic:"لا يزال الدليل قابلًا لأكثر من تفسير."
        },
        {
            title:"Visual information",
            explanation:"An image or symbol can be ambiguous when viewers cannot confidently determine what it represents.",
            example:"The symbol is visually ambiguous.",
            arabic:"الرمز غامض من الناحية البصرية."
        },
        {
            title:"Instructions",
            explanation:"Instructions become ambiguous when users cannot determine exactly what action is required.",
            example:"The final instruction was ambiguous.",
            arabic:"كانت التعليمات الأخيرة غير واضحة وملتبسة."
        }
    ],

    quiz:[
        {
            question:"Which statement best describes something ambiguous?",
            options:[
                {text:"It has more than one reasonable interpretation.",correct:true},
                {text:"It contains absolutely no information.",correct:false},
                {text:"It is always intentionally deceptive.",correct:false},
                {text:"It is necessarily incorrect.",correct:false}
            ],
            explanation:"Ambiguous means capable of more than one reasonable interpretation."
        },
        {
            question:"Which noun is derived directly from ambiguous?",
            options:[
                {text:"ambiguity",correct:true},
                {text:"ambition",correct:false},
                {text:"ambivalence",correct:false},
                {text:"ambiguousnessly",correct:false}
            ],
            explanation:"Ambiguity is the noun referring to the condition of being ambiguous."
        },
        {
            question:"Why can a contract clause be called ambiguous?",
            options:[
                {text:"Different parties may reasonably interpret it differently.",correct:true},
                {text:"It is always written in another language.",correct:false},
                {text:"It contains too many pages.",correct:false},
                {text:"It has no legal significance.",correct:false}
            ],
            explanation:"Contractual ambiguity concerns competing reasonable interpretations."
        },
        {
            question:"Which word is the strongest direct opposite of ambiguous?",
            options:[
                {text:"unambiguous",correct:true},
                {text:"uncertain",correct:false},
                {text:"equivocal",correct:false},
                {text:"vague",correct:false}
            ],
            explanation:"Unambiguous means having one clear interpretation."
        },
        {
            question:"What is the key difference between vague and ambiguous?",
            options:[
                {text:"Vague lacks precision; ambiguous permits multiple interpretations.",correct:true},
                {text:"Vague is always positive; ambiguous is always negative.",correct:false},
                {text:"They have completely unrelated meanings.",correct:false},
                {text:"Ambiguous only describes people.",correct:false}
            ],
            explanation:"Vagueness concerns lack of precision, while ambiguity concerns competing interpretations."
        }
    ]
},

/* ==========================================================
   02 — RESILIENT
   ========================================================== */

{
    sourceId:"default_002",
    id:"default_002",
    word:"resilient",
    partOfSpeech:"adjective",
    translation:"مرن / قادر على التعافي / صامد",

    definition:{
        english:"Able to recover, adapt, or return to effective functioning after difficulty, pressure, damage, or failure.",
        arabic:"تصف resilient شخصًا أو نظامًا أو مادة قادرة على تحمل الصعوبات ثم التعافي أو التكيف والعودة إلى حالة جيدة.",
        example:"The resilient team recovered quickly after the project failed.",
        exampleTranslation:"تعافى الفريق الصامد بسرعة بعد فشل المشروع.",
        usage:"Resilient can describe people, organizations, economies, communities, materials, and systems. In human contexts it emphasizes recovery and adaptation rather than simply enduring pain."
    },

    family:[
        {
            partOfSpeech:"adjective",
            word:"resilient",
            meaning:"Able to recover from difficulty.",
            arabic:"قادر على التعافي من الصعوبات.",
            example:"Children can be remarkably resilient."
        },
        {
            partOfSpeech:"noun",
            word:"resilience",
            meaning:"The ability to recover and adapt after adversity.",
            arabic:"القدرة على التعافي والتكيف بعد الشدائد.",
            example:"Resilience is valuable during major organizational change."
        },
        {
            partOfSpeech:"adverb",
            word:"resiliently",
            meaning:"In a resilient or adaptive manner.",
            arabic:"بطريقة صامدة وقابلة للتكيف.",
            example:"The community responded resiliently."
        },
        {
            partOfSpeech:"related noun",
            word:"resiliency",
            meaning:"An alternative noun form meaning resilience.",
            arabic:"صيغة اسمية أخرى تعني القدرة على الصمود والتعافي.",
            example:"The system's resiliency impressed the engineers."
        }
    ],

    synonyms:[
        {
            word:"robust",
            explanation:"Strong enough to withstand stress or difficult conditions.",
            arabic:"قوي وقادر على تحمل الظروف الصعبة."
        },
        {
            word:"adaptable",
            explanation:"Able to change behavior or structure according to circumstances.",
            arabic:"قابل للتكيف."
        },
        {
            word:"hardy",
            explanation:"Able to survive difficult physical or environmental conditions.",
            arabic:"قوي وقادر على البقاء في الظروف القاسية."
        }
    ],

    antonyms:[
        {
            word:"fragile",
            explanation:"Easily damaged or broken.",
            arabic:"هش وسهل التلف."
        },
        {
            word:"vulnerable",
            explanation:"Easily harmed or negatively affected.",
            arabic:"عرضة للضرر."
        },
        {
            word:"inflexible",
            explanation:"Unable or unwilling to adapt to change.",
            arabic:"غير مرن وغير قادر على التكيف."
        }
    ],

    dialogue:[
        {speaker:"A",english:"The company had a difficult year.",arabic:"مرت الشركة بسنة صعبة."},
        {speaker:"B",english:"Yes, but the organization proved remarkably resilient.",arabic:"نعم، لكنها أثبتت قدرة ملحوظة على الصمود."},
        {speaker:"A",english:"What helped it recover?",arabic:"ما الذي ساعدها على التعافي؟"},
        {speaker:"B",english:"The employees adapted quickly to the new market.",arabic:"تكيف الموظفون بسرعة مع السوق الجديدة."},
        {speaker:"A",english:"So resilience came from flexibility as well as determination.",arabic:"إذن جاءت القدرة على الصمود من المرونة والإصرار معًا."},
        {speaker:"B",english:"Exactly. They changed their strategy instead of repeating the old one.",arabic:"بالضبط. لقد غيروا استراتيجيتهم بدلًا من تكرار القديمة."},
        {speaker:"A",english:"That is an important lesson for any organization.",arabic:"هذا درس مهم لأي منظمة."},
        {speaker:"B",english:"A resilient organization learns from disruption instead of simply resisting it.",arabic:"المنظمة الصامدة تتعلم من الاضطراب بدلًا من مقاومته فقط."}
    ],

    contexts:[
        {title:"Personality",explanation:"A resilient person recovers emotionally or practically after setbacks.",example:"She is resilient after years of difficult experiences.",arabic:"هي صامدة وقادرة على التعافي بعد سنوات من التجارب الصعبة."},
        {title:"Business",explanation:"A resilient company can adapt to market shocks.",example:"The business remained resilient during the downturn.",arabic:"ظلت الشركة قادرة على الصمود أثناء الركود."},
        {title:"Technology",explanation:"A resilient system continues operating or recovers rapidly after failure.",example:"The server architecture is highly resilient.",arabic:"بنية الخوادم قادرة جدًا على تحمل الأعطال والتعافي منها."},
        {title:"Materials",explanation:"A resilient material returns to its original form after pressure or deformation.",example:"The material is flexible and resilient.",arabic:"المادة مرنة وقادرة على استعادة شكلها."},
        {title:"Community",explanation:"A resilient community can organize and recover after disruption.",example:"The community showed remarkable resilience after the disaster.",arabic:"أظهر المجتمع قدرة كبيرة على التعافي بعد الكارثة."}
    ],

    quiz:[
        {
            question:"What is the central idea behind resilient?",
            options:[
                {text:"The ability to recover or adapt after difficulty.",correct:true},
                {text:"The inability to change.",correct:false},
                {text:"Permanent damage.",correct:false},
                {text:"Complete avoidance of problems.",correct:false}
            ],
            explanation:"Resilience involves recovery, adaptation, or effective continuation after difficulty."
        },
        {
            question:"What is the noun form of resilient?",
            options:[
                {text:"resilience",correct:true},
                {text:"resistance",correct:false},
                {text:"reliance",correct:false},
                {text:"resemblance",correct:false}
            ],
            explanation:"Resilience is the standard noun form."
        },
        {
            question:"Which situation best illustrates a resilient organization?",
            options:[
                {text:"It changes strategy and recovers after a market shock.",correct:true},
                {text:"It refuses to change any process.",correct:false},
                {text:"It closes immediately after one failure.",correct:false},
                {text:"It ignores all external information.",correct:false}
            ],
            explanation:"Organizational resilience involves adaptation and recovery."
        },
        {
            question:"Which is the clearest antonym of resilient?",
            options:[
                {text:"fragile",correct:true},
                {text:"robust",correct:false},
                {text:"adaptable",correct:false},
                {text:"durable",correct:false}
            ],
            explanation:"Fragile describes something easily damaged and therefore contrasts strongly with resilient."
        },
        {
            question:"Can resilient describe a computer system?",
            options:[
                {text:"Yes, if the system can tolerate failures and recover effectively.",correct:true},
                {text:"No, resilient only describes human emotions.",correct:false},
                {text:"Only if the computer is physically flexible.",correct:false},
                {text:"Only in literary writing.",correct:false}
            ],
            explanation:"Resilient is widely used in engineering and technology."
        }
    ]
},

/* ==========================================================
   03 — SUBTLE
   ========================================================== */

{
    sourceId:"default_003",
    id:"default_003",
    word:"subtle",
    partOfSpeech:"adjective",
    translation:"دقيق / خفي / طفيف يصعب ملاحظته",

    definition:{
        english:"Not obvious, strong, or immediately noticeable; often involving a small but meaningful distinction.",
        arabic:"تصف subtle شيئًا دقيقًا أو خفيًا لا يظهر بسهولة، لكنه قد يحمل فرقًا أو تأثيرًا مهمًا.",
        example:"There is a subtle difference between the two expressions.",
        exampleTranslation:"هناك فرق دقيق بين التعبيرين.",
        usage:"Subtle often describes differences, emotions, humor, changes, signals, flavors, arguments, or distinctions that require careful attention to notice."
    },

    family:[
        {partOfSpeech:"adjective",word:"subtle",meaning:"Difficult to notice but meaningful.",arabic:"دقيق وخفي.",example:"The painting contains subtle details."},
        {partOfSpeech:"noun",word:"subtlety",meaning:"A fine or delicate distinction.",arabic:"دقة أو تفصيل خفي.",example:"The writer understands the subtlety of language."},
        {partOfSpeech:"adverb",word:"subtly",meaning:"In a way that is not obvious.",arabic:"بطريقة خفية أو دقيقة.",example:"The message was subtly communicated."},
        {partOfSpeech:"related",word:"subtleties",meaning:"Small distinctions or fine details.",arabic:"الفروق الدقيقة والتفاصيل الخفية.",example:"The article explores cultural subtleties."}
    ],

    synonyms:[
        {word:"delicate",explanation:"Fine, sensitive, or easily overlooked.",arabic:"دقيق وحساس."},
        {word:"nuanced",explanation:"Showing small distinctions and shades of meaning.",arabic:"يتضمن فروقًا دقيقة."},
        {word:"faint",explanation:"Weak or barely noticeable.",arabic:"خفيف أو بالكاد ملحوظ."}
    ],

    antonyms:[
        {word:"obvious",explanation:"Easy to see or understand.",arabic:"واضح."},
        {word:"blatant",explanation:"Very obvious and often offensively so.",arabic:"صارخ وواضح جدًا."},
        {word:"pronounced",explanation:"Very noticeable or strongly marked.",arabic:"بارز وملحوظ بشدة."}
    ],

    dialogue:[
        {speaker:"A",english:"Did you notice the difference in the two reports?",arabic:"هل لاحظت الفرق بين التقريرين؟"},
        {speaker:"B",english:"Yes, but it was quite subtle.",arabic:"نعم، لكنه كان دقيقًا جدًا."},
        {speaker:"A",english:"What changed?",arabic:"ماذا تغير؟"},
        {speaker:"B",english:"The second report uses slightly more cautious language.",arabic:"التقرير الثاني يستخدم لغة أكثر حذرًا قليلًا."},
        {speaker:"A",english:"I almost missed that distinction.",arabic:"كدت ألا ألاحظ ذلك الفرق."},
        {speaker:"B",english:"That is the subtlety of professional writing.",arabic:"تلك هي دقة الكتابة المهنية."},
        {speaker:"A",english:"So the wording matters even when the facts remain the same.",arabic:"إذن الصياغة مهمة حتى عندما تبقى الحقائق نفسها."},
        {speaker:"B",english:"Exactly. Small linguistic choices can subtly change the tone.",arabic:"بالضبط. الاختيارات اللغوية الصغيرة يمكن أن تغير النبرة بشكل خفي."}
    ],

    contexts:[
        {title:"Language",explanation:"A subtle distinction separates two expressions that appear almost identical.",example:"There is a subtle distinction between imply and infer.",arabic:"هناك فرق دقيق بين imply و infer."},
        {title:"Emotion",explanation:"A subtle emotion is present without being strongly displayed.",example:"He gave a subtle smile.",arabic:"ابتسم ابتسامة خفيفة بالكاد ملحوظة."},
        {title:"Taste",explanation:"A subtle flavor is delicate rather than powerful.",example:"The sauce has a subtle citrus flavor.",arabic:"للصلصة نكهة حمضيات خفيفة ودقيقة."},
        {title:"Design",explanation:"A subtle visual detail can improve a design without attracting immediate attention.",example:"The interface uses subtle shadows.",arabic:"تستخدم الواجهة ظلالًا دقيقة وغير صارخة."},
        {title:"Argument",explanation:"A subtle argument may rely on a fine logical distinction.",example:"She made a subtle but important point.",arabic:"قدمت نقطة دقيقة لكنها مهمة."}
    ],

    quiz:[
        {question:"What does subtle primarily suggest?",options:[{text:"Something not obvious but potentially meaningful.",correct:true},{text:"Something extremely loud.",correct:false},{text:"Something completely meaningless.",correct:false},{text:"Something always visible.",correct:false}],explanation:"Subtle describes things that are difficult to notice but may matter."},
        {question:"Which noun comes from subtle?",options:[{text:"subtlety",correct:true},{text:"substitution",correct:false},{text:"submission",correct:false},{text:"substance",correct:false}],explanation:"Subtlety means a fine or delicate distinction."},
        {question:"Which synonym is especially useful for language and meaning?",options:[{text:"nuanced",correct:true},{text:"blatant",correct:false},{text:"obvious",correct:false},{text:"massive",correct:false}],explanation:"Nuanced is strongly associated with fine distinctions in meaning."},
        {question:"Which sentence uses subtle correctly?",options:[{text:"There was a subtle change in his tone.",correct:true},{text:"The explosion was subtle and deafening.",correct:false},{text:"The obvious sign was completely subtle.",correct:false},{text:"Subtle means impossible to understand in every case.",correct:false}],explanation:"A small change in tone can be subtle."},
        {question:"What is a subtle flavor?",options:[{text:"A delicate flavor that is not overpowering.",correct:true},{text:"A flavor that is always bitter.",correct:false},{text:"A flavor that cannot be tasted.",correct:false},{text:"An extremely strong flavor.",correct:false}],explanation:"Subtle flavors are delicate rather than dominant."}
    ]
},

/* ==========================================================
   04 — PREVALENT
   ========================================================== */

{
    sourceId:"default_004",
    id:"default_004",
    word:"prevalent",
    partOfSpeech:"adjective",
    translation:"شائع / منتشر على نطاق واسع",

    definition:{
        english:"Common or widespread within a particular group, place, period, or situation.",
        arabic:"تصف prevalent شيئًا منتشرًا أو شائعًا بشكل ملحوظ داخل مجتمع أو مجال أو فترة معينة.",
        example:"Remote work became increasingly prevalent after major technological changes.",
        exampleTranslation:"أصبح العمل عن بُعد أكثر انتشارًا بعد تغيرات تكنولوجية كبيرة.",
        usage:"Prevalent is more formal than common and is frequent in academic, business, medical, social, and analytical writing."
    },

    family:[
        {partOfSpeech:"adjective",word:"prevalent",meaning:"Widespread or commonly found.",arabic:"منتشر وشائع.",example:"The practice is prevalent among young professionals."},
        {partOfSpeech:"noun",word:"prevalence",meaning:"The degree to which something is widespread.",arabic:"مدى انتشار شيء ما.",example:"Researchers measured the prevalence of the behavior."},
        {partOfSpeech:"adverb",word:"prevalently",meaning:"In a widespread manner.",arabic:"على نحو منتشر.",example:"The idea was not equally prevalently accepted."},
        {partOfSpeech:"related",word:"prevail",meaning:"To exist or be generally accepted over others.",arabic:"يسود أو ينتشر.",example:"A cautious approach eventually prevailed."}
    ],

    synonyms:[
        {word:"widespread",explanation:"Found across a large area or among many people.",arabic:"واسع الانتشار."},
        {word:"common",explanation:"Frequently encountered or occurring.",arabic:"شائع."},
        {word:"pervasive",explanation:"Present throughout an area or situation, often strongly.",arabic:"منتشر في كل مكان أو متغلغل."}
    ],

    antonyms:[
        {word:"rare",explanation:"Not commonly encountered.",arabic:"نادر."},
        {word:"uncommon",explanation:"Not frequently occurring.",arabic:"غير شائع."},
        {word:"isolated",explanation:"Limited to a small or separate area or group.",arabic:"معزول أو محدود الانتشار."}
    ],

    dialogue:[
        {speaker:"A",english:"Is remote work still prevalent in the industry?",arabic:"هل لا يزال العمل عن بعد منتشرًا في هذا المجال؟"},
        {speaker:"B",english:"Yes, although the percentage varies by company.",arabic:"نعم، رغم أن النسبة تختلف من شركة إلى أخرى."},
        {speaker:"A",english:"Why did it become so prevalent?",arabic:"لماذا أصبح منتشرًا إلى هذا الحد؟"},
        {speaker:"B",english:"Improved communication technology played a major role.",arabic:"لعب تطور تكنولوجيا الاتصال دورًا رئيسيًا."},
        {speaker:"A",english:"Was the change equally prevalent across all sectors?",arabic:"هل كان التغير منتشرًا بنفس الدرجة في جميع القطاعات؟"},
        {speaker:"B",english:"No. Some industries still depend heavily on physical presence.",arabic:"لا. بعض الصناعات لا تزال تعتمد بشدة على الحضور الفعلي."},
        {speaker:"A",english:"So prevalence depends on the context.",arabic:"إذن مدى الانتشار يعتمد على السياق."},
        {speaker:"B",english:"Exactly. Something can be prevalent in one sector and rare in another.",arabic:"بالضبط. قد يكون الشيء منتشرًا في قطاع ونادرًا في قطاع آخر."}
    ],

    contexts:[
        {title:"Social behavior",explanation:"A behavior is prevalent when many members of a population practice it.",example:"The habit is prevalent among university students.",arabic:"العادة منتشرة بين طلاب الجامعة."},
        {title:"Disease",explanation:"Medical writing uses prevalent to describe conditions found frequently in a population.",example:"The condition is prevalent in older adults.",arabic:"الحالة منتشرة بين كبار السن."},
        {title:"Technology",explanation:"A technology can become prevalent when widespread adoption occurs.",example:"Cloud computing is prevalent in modern businesses.",arabic:"الحوسبة السحابية منتشرة في الشركات الحديثة."},
        {title:"Language",explanation:"A word or expression can be prevalent in a particular community.",example:"The expression is prevalent in online discussions.",arabic:"التعبير شائع في النقاشات على الإنترنت."},
        {title:"Ideas",explanation:"A belief may be prevalent when widely held.",example:"That assumption remains prevalent.",arabic:"لا يزال ذلك الافتراض شائعًا."}
    ],

    quiz:[
        {question:"What does prevalent mean?",options:[{text:"Widespread or commonly occurring.",correct:true},{text:"Extremely rare.",correct:false},{text:"Impossible to observe.",correct:false},{text:"Limited to one individual.",correct:false}],explanation:"Prevalent means widespread or common within a context."},
        {question:"What is the noun form?",options:[{text:"prevalence",correct:true},{text:"prevention",correct:false},{text:"preference",correct:false},{text:"prevalency",correct:false}],explanation:"Prevalence is the degree or extent of being widespread."},
        {question:"Which word is closest to prevalent?",options:[{text:"widespread",correct:true},{text:"isolated",correct:false},{text:"scarce",correct:false},{text:"unique",correct:false}],explanation:"Widespread is a direct synonym."},
        {question:"Can something be prevalent in one group but rare in another?",options:[{text:"Yes, because prevalence depends on context and population.",correct:true},{text:"No, prevalent always describes everything everywhere.",correct:false},{text:"Only if it is a medical condition.",correct:false},{text:"Only in historical writing.",correct:false}],explanation:"Prevalence is context-dependent."},
        {question:"Which style commonly uses prevalent?",options:[{text:"Formal, academic, analytical, and professional writing.",correct:true},{text:"Only children's stories.",correct:false},{text:"Only poetry.",correct:false},{text:"Only informal conversation.",correct:false}],explanation:"Prevalent is particularly common in formal analytical contexts."}
    ]
},

/* ==========================================================
   05 — MITIGATE
   ========================================================== */

{
    sourceId:"default_005",
    id:"default_005",
    word:"mitigate",
    partOfSpeech:"verb",
    translation:"يخفف / يقلل من شدة أو أثر",

    definition:{
        english:"To make something harmful, severe, painful, or negative less intense, serious, or damaging.",
        arabic:"تعني mitigate اتخاذ إجراء يؤدي إلى تخفيف شدة مشكلة أو ضرر أو خطر، دون أن يعني ذلك بالضرورة القضاء عليه تمامًا.",
        example:"The company introduced new controls to mitigate the risk of data loss.",
        exampleTranslation:"قدمت الشركة ضوابط جديدة للتخفيف من خطر فقدان البيانات.",
        usage:"Mitigate is common in business, law, cybersecurity, environmental policy, medicine, and risk management. It usually means reducing impact rather than eliminating the underlying problem."
    },

    family:[
        {partOfSpeech:"verb",word:"mitigate",meaning:"Reduce severity or harmful impact.",arabic:"يخفف الشدة أو الضرر.",example:"Encryption can mitigate certain security risks."},
        {partOfSpeech:"noun",word:"mitigation",meaning:"An action or process that reduces harm or risk.",arabic:"التخفيف من الضرر أو المخاطر.",example:"Risk mitigation requires careful planning."},
        {partOfSpeech:"noun",word:"mitigator",meaning:"Something or someone that reduces severity.",arabic:"عامل أو وسيلة تخفف الشدة.",example:"The firewall acted as a useful mitigator."},
        {partOfSpeech:"adjective",word:"mitigating",meaning:"Reducing the severity of something.",arabic:"مخفف للشدة أو الضرر.",example:"Several mitigating factors were considered."}
    ],

    synonyms:[
        {word:"alleviate",explanation:"Make pain, difficulty, or a problem less severe.",arabic:"يخفف الألم أو المشكلة."},
        {word:"lessen",explanation:"Reduce the degree or amount of something.",arabic:"يقلل أو يخفف."},
        {word:"moderate",explanation:"Make something less extreme or intense.",arabic:"يحد من التطرف أو الشدة."}
    ],

    antonyms:[
        {word:"aggravate",explanation:"Make a problem or condition worse.",arabic:"يفاقم المشكلة."},
        {word:"intensify",explanation:"Make something stronger or more severe.",arabic:"يزيد الشدة."},
        {word:"exacerbate",explanation:"Make an already bad situation significantly worse.",arabic:"يفاقم وضعًا سيئًا."}
    ],

    dialogue:[
        {speaker:"A",english:"How can we mitigate the security risk?",arabic:"كيف يمكننا التخفيف من المخاطر الأمنية؟"},
        {speaker:"B",english:"We should introduce stronger authentication controls.",arabic:"ينبغي أن نطبق ضوابط مصادقة أقوى."},
        {speaker:"A",english:"Will that eliminate the risk?",arabic:"هل سيقضي ذلك على الخطر؟"},
        {speaker:"B",english:"No, but it can significantly mitigate it.",arabic:"لا، لكنه يمكن أن يخففه بشكل كبير."},
        {speaker:"A",english:"What other mitigation measures should we consider?",arabic:"ما إجراءات التخفيف الأخرى التي ينبغي أن نأخذها في الاعتبار؟"},
        {speaker:"B",english:"Regular backups and monitoring would help.",arabic:"ستساعد النسخ الاحتياطية والمراقبة المنتظمة."},
        {speaker:"A",english:"So the goal is risk reduction rather than perfect prevention.",arabic:"إذن الهدف هو تقليل الخطر بدلًا من الوقاية المثالية."},
        {speaker:"B",english:"Exactly. Good security assumes that some risk will remain.",arabic:"بالضبط. الأمن الجيد يفترض أن بعض المخاطر ستبقى."}
    ],

    contexts:[
        {title:"Cybersecurity",explanation:"Security controls mitigate threats by reducing their likelihood or impact.",example:"Multi-factor authentication mitigates account takeover risk.",arabic:"المصادقة متعددة العوامل تقلل خطر الاستيلاء على الحساب."},
        {title:"Climate",explanation:"Climate measures can mitigate harmful environmental effects.",example:"The policy aims to mitigate emissions.",arabic:"تهدف السياسة إلى التخفيف من الانبعاثات."},
        {title:"Pain",explanation:"Treatment may mitigate symptoms without completely removing their cause.",example:"The medication mitigated the pain.",arabic:"خفف الدواء الألم."},
        {title:"Business",explanation:"Companies mitigate financial or operational risks through controls and planning.",example:"Insurance can mitigate financial exposure.",arabic:"يمكن للتأمين تخفيف التعرض للمخاطر المالية."},
        {title:"Conflict",explanation:"Communication may mitigate tension or hostility.",example:"The meeting helped mitigate tensions.",arabic:"ساعد الاجتماع على تخفيف التوترات."}
    ],

    quiz:[
        {question:"What does mitigate mean?",options:[{text:"Reduce the severity or impact of something.",correct:true},{text:"Guarantee complete elimination.",correct:false},{text:"Create a new problem.",correct:false},{text:"Ignore a problem.",correct:false}],explanation:"Mitigate means reduce severity or impact, not necessarily eliminate."},
        {question:"Which noun is associated with mitigate?",options:[{text:"mitigation",correct:true},{text:"mitigacy",correct:false},{text:"mitigance",correct:false},{text:"mitigement",correct:false}],explanation:"Mitigation is the noun form."},
        {question:"What is an important distinction between mitigate and eliminate?",options:[{text:"Mitigate reduces impact; eliminate removes the problem completely.",correct:true},{text:"They always mean exactly the same thing.",correct:false},{text:"Mitigate makes problems worse.",correct:false},{text:"Eliminate only applies to emotions.",correct:false}],explanation:"Mitigation is about reducing harm, while elimination implies removal."},
        {question:"Which is an antonym of mitigate?",options:[{text:"exacerbate",correct:true},{text:"alleviate",correct:false},{text:"lessen",correct:false},{text:"moderate",correct:false}],explanation:"Exacerbate means make a bad situation worse."},
        {question:"Which sentence is most natural?",options:[{text:"The firewall helps mitigate the security risk.",correct:true},{text:"The firewall mitigates the risk by making it larger.",correct:false},{text:"Mitigate means to guarantee safety.",correct:false},{text:"The firewall mitigated because it disappeared.",correct:false}],explanation:"Mitigate is frequently used with risks, threats and harmful effects."}
    ]
},

/* ==========================================================
   06 — COHERENT
   ========================================================== */

{
    sourceId:"default_006",
    id:"default_006",
    word:"coherent",
    partOfSpeech:"adjective",
    translation:"مترابط / متماسك / منطقي",

    definition:{
        english:"Logical, consistent, and connected in a way that makes an idea, explanation, argument, or system easy to understand as a whole.",
        arabic:"تصف coherent شيئًا مترابطًا ومنظمًا بحيث ترتبط أجزاؤه منطقيًا ويكون من السهل فهمه ككل.",
        example:"She presented a coherent argument supported by clear evidence.",
        exampleTranslation:"قدمت حجة مترابطة مدعومة بأدلة واضحة.",
        usage:"Coherent commonly describes arguments, writing, explanations, narratives, plans, theories, and sometimes speech."
    },

    family:[
        {partOfSpeech:"adjective",word:"coherent",meaning:"Logical and well connected.",arabic:"مترابط ومنطقي.",example:"His explanation was coherent."},
        {partOfSpeech:"noun",word:"coherence",meaning:"The quality of being logically connected.",arabic:"الترابط المنطقي.",example:"The essay lacks coherence."},
        {partOfSpeech:"adverb",word:"coherently",meaning:"In a logical and connected manner.",arabic:"بشكل مترابط ومنطقي.",example:"She explained the issue coherently."},
        {partOfSpeech:"antonym noun",word:"incoherence",meaning:"Lack of logical connection or consistency.",arabic:"انعدام الترابط أو المنطق.",example:"The report suffered from incoherence."}
    ],

    synonyms:[
        {word:"consistent",explanation:"Free from contradictions and logically compatible.",arabic:"متسق وغير متناقض."},
        {word:"logical",explanation:"Following understandable reasoning.",arabic:"منطقي."},
        {word:"consistent",explanation:"Showing orderly agreement between parts.",arabic:"متماسك ومتوافق."}
    ],

    antonyms:[
        {word:"incoherent",explanation:"Lacking logical connection or clarity.",arabic:"غير مترابط."},
        {word:"confused",explanation:"Difficult to understand because ideas lack order.",arabic:"مشوش."},
        {word:"contradictory",explanation:"Containing ideas that conflict with one another.",arabic:"متناقض."}
    ],

    dialogue:[
        {speaker:"A",english:"What did you think of the presentation?",arabic:"ما رأيك في العرض؟"},
        {speaker:"B",english:"The ideas were interesting, but the argument was not fully coherent.",arabic:"كانت الأفكار مثيرة للاهتمام، لكن الحجة لم تكن مترابطة تمامًا."},
        {speaker:"A",english:"Where did the logic break down?",arabic:"أين انهار التسلسل المنطقي؟"},
        {speaker:"B",english:"The conclusion did not clearly follow from the evidence.",arabic:"الاستنتاج لم يتبع الأدلة بشكل واضح."},
        {speaker:"A",english:"So the individual points were good, but the structure was weak.",arabic:"إذن كانت النقاط الفردية جيدة، لكن البنية كانت ضعيفة."},
        {speaker:"B",english:"Exactly. The speaker needed a more coherent structure.",arabic:"بالضبط. كان المتحدث يحتاج إلى بنية أكثر ترابطًا."},
        {speaker:"A",english:"That would make the reasoning easier to follow.",arabic:"ذلك سيجعل متابعة الاستدلال أسهل."},
        {speaker:"B",english:"And it would make the final conclusion more convincing.",arabic:"وسيجل الاستنتاج النهائي أكثر إقناعًا."}
    ],

    contexts:[
        {title:"Argument",explanation:"A coherent argument has logically connected premises and conclusions.",example:"The researcher developed a coherent argument.",arabic:"طور الباحث حجة مترابطة."},
        {title:"Writing",explanation:"Coherent writing connects paragraphs and ideas naturally.",example:"The essay is coherent from beginning to end.",arabic:"المقال مترابط من البداية إلى النهاية."},
        {title:"Story",explanation:"A coherent story has events that make sense together.",example:"The plot becomes more coherent in the second half.",arabic:"تصبح الحبكة أكثر ترابطًا في النصف الثاني."},
        {title:"Plan",explanation:"A coherent plan has compatible steps directed toward a clear goal.",example:"We need a coherent strategy.",arabic:"نحتاج إلى استراتيجية مترابطة."},
        {title:"Speech",explanation:"Coherent speech is understandable and logically organized.",example:"He remained coherent under pressure.",arabic:"ظل كلامه مترابطًا تحت الضغط."}
    ],

    quiz:[
        {question:"What makes an argument coherent?",options:[{text:"Its ideas connect logically and consistently.",correct:true},{text:"It contains many unrelated facts.",correct:false},{text:"It uses complicated vocabulary only.",correct:false},{text:"It avoids all evidence.",correct:false}],explanation:"Coherence comes from logical connection and consistency."},
        {question:"What is the noun form?",options:[{text:"coherence",correct:true},{text:"cohesionness",correct:false},{text:"coherencying",correct:false},{text:"cohesion",correct:false}],explanation:"Coherence is the standard noun form."},
        {question:"Which is the clearest antonym?",options:[{text:"incoherent",correct:true},{text:"logical",correct:false},{text:"consistent",correct:false},{text:"organized",correct:false}],explanation:"Incoherent is the direct opposite."},
        {question:"Can a story be coherent?",options:[{text:"Yes, when its events and ideas form a logical whole.",correct:true},{text:"No, coherent only describes arguments.",correct:false},{text:"Only fictional stories can be coherent.",correct:false},{text:"Only spoken stories can be coherent.",correct:false}],explanation:"Coherent can describe narratives and stories."},
        {question:"Which sentence uses coherent naturally?",options:[{text:"She gave a coherent explanation of the problem.",correct:true},{text:"She gave a coherent explanation that made no logical sense at all.",correct:false},{text:"Coherent means extremely loud.",correct:false},{text:"Coherent means physically heavy.",correct:false}],explanation:"A coherent explanation is logically organized and understandable."}
    ]
},

/* ==========================================================
   07 — CONSTRAINT
   ========================================================== */

{
    sourceId:"default_007",
    id:"default_007",
    word:"constraint",
    partOfSpeech:"noun",
    translation:"قيد / عائق / حد مفروض",

    definition:{
        english:"A limitation, restriction, or condition that controls what can be done or how something can be developed.",
        arabic:"تعني constraint قيدًا أو حدًا يفرضه الوقت أو المال أو القوانين أو الموارد أو الظروف على ما يمكن فعله.",
        example:"Limited funding is the main constraint on the project.",
        exampleTranslation:"التمويل المحدود هو القيد الرئيسي على المشروع.",
        usage:"Constraint is common in engineering, programming, project management, business, mathematics, and everyday planning."
    },

    family:[
        {partOfSpeech:"noun",word:"constraint",meaning:"A restriction or limitation.",arabic:"قيد أو حد.",example:"Budget constraints delayed the project."},
        {partOfSpeech:"verb",word:"constrain",meaning:"To restrict or limit.",arabic:"يقيد أو يحد.",example:"The budget constrained our options."},
        {partOfSpeech:"adjective",word:"constrained",meaning:"Limited by restrictions or conditions.",arabic:"مقيد أو محدود.",example:"We work in a constrained environment."},
        {partOfSpeech:"noun",word:"constriction",meaning:"The act or effect of becoming narrower or more restricted.",arabic:"التضييق أو الانحصار.",example:"The design suffers from excessive constriction."}
    ],

    synonyms:[
        {word:"restriction",explanation:"A rule or condition limiting action.",arabic:"تقييد أو حظر."},
        {word:"limitation",explanation:"A boundary on ability, amount, or possibility.",arabic:"حد أو محدودية."},
        {word:"restriction",explanation:"A condition preventing unrestricted action.",arabic:"قيد."}
    ],

    antonyms:[
        {word:"freedom",explanation:"The absence of restrictive control.",arabic:"حرية."},
        {word:"flexibility",explanation:"Ability to adapt without strict limits.",arabic:"مرونة."},
        {word:"latitude",explanation:"Freedom to choose among different possibilities.",arabic:"هامش واسع من الحرية."}
    ],

    dialogue:[
        {speaker:"A",english:"Why can’t we add that feature this month?",arabic:"لماذا لا نستطيع إضافة تلك الميزة هذا الشهر؟"},
        {speaker:"B",english:"We have several constraints.",arabic:"لدينا عدة قيود."},
        {speaker:"A",english:"Is the main constraint the budget?",arabic:"هل القيد الرئيسي هو الميزانية؟"},
        {speaker:"B",english:"The budget is one constraint, but time is another.",arabic:"الميزانية قيد واحد، لكن الوقت قيد آخر."},
        {speaker:"A",english:"Could we reduce the scope?",arabic:"هل يمكننا تقليل نطاق المشروع؟"},
        {speaker:"B",english:"Yes. That would give the developers more flexibility.",arabic:"نعم. سيمنح ذلك المطورين مرونة أكبر."},
        {speaker:"A",english:"So constraints do not always mean that the project must stop.",arabic:"إذن القيود لا تعني دائمًا أن المشروع يجب أن يتوقف."},
        {speaker:"B",english:"Exactly. We can often redesign the solution around the constraints.",arabic:"بالضبط. يمكننا غالبًا إعادة تصميم الحل بما يتناسب مع القيود."}
    ],

    contexts:[
        {title:"Programming",explanation:"A programming constraint limits what an algorithm or system may do.",example:"Memory is a major constraint on the application.",arabic:"الذاكرة قيد رئيسي على التطبيق."},
        {title:"Business",explanation:"A business constraint may come from money, staff, law, or time.",example:"Regulatory constraints affect the business model.",arabic:"القيود التنظيمية تؤثر في نموذج العمل."},
        {title:"Engineering",explanation:"Physical requirements constrain design choices.",example:"Weight is a critical design constraint.",arabic:"الوزن قيد تصميمي مهم."},
        {title:"Personal planning",explanation:"A person's schedule or responsibilities can act as constraints.",example:"My schedule is the main constraint.",arabic:"جدولي الزمني هو القيد الرئيسي."},
        {title:"Mathematics",explanation:"A constraint defines conditions that a valid solution must satisfy.",example:"The optimization problem has several constraints.",arabic:"لمسألة التحسين عدة قيود."}
    ],

    quiz:[
        {question:"What is a constraint?",options:[{text:"A limitation or restriction affecting what can be done.",correct:true},{text:"A guaranteed solution.",correct:false},{text:"An unlimited resource.",correct:false},{text:"A personal preference only.",correct:false}],explanation:"A constraint limits possible actions or solutions."},
        {question:"What is the verb form?",options:[{text:"constrain",correct:true},{text:"constraintize",correct:false},{text:"constrainment",correct:false},{text:"constrictive",correct:false}],explanation:"Constrain is the verb."},
        {question:"Which can be a project constraint?",options:[{text:"Time, budget, staff, or technical requirements.",correct:true},{text:"Only the manager's favorite color.",correct:false},{text:"Unlimited funding.",correct:false},{text:"Perfect flexibility.",correct:false}],explanation:"Project constraints often involve resources, time and technical conditions."},
        {question:"Which word is closest to constraint?",options:[{text:"limitation",correct:true},{text:"freedom",correct:false},{text:"opportunity",correct:false},{text:"flexibility",correct:false}],explanation:"Limitation is a direct synonym."},
        {question:"Can a constraint sometimes improve a design?",options:[{text:"Yes, because limits can force clearer and more efficient solutions.",correct:true},{text:"No, constraints always destroy projects.",correct:false},{text:"Only in mathematics.",correct:false},{text:"Only when there is no budget.",correct:false}],explanation:"Design constraints can encourage focused and efficient solutions."}
    ]
},

/* ==========================================================
   08 — INFER
   ========================================================== */

{
    sourceId:"default_008",
    id:"default_008",
    word:"infer",
    partOfSpeech:"verb",
    translation:"يستنتج / يستدل",

    definition:{
        english:"To reach a conclusion from evidence, information, observations, or clues rather than from a statement made directly.",
        arabic:"تعني infer الوصول إلى استنتاج اعتمادًا على الأدلة أو القرائن بدلًا من أن يكون الاستنتاج مصرحًا به بشكل مباشر.",
        example:"From the evidence, we can infer that the system was compromised earlier.",
        exampleTranslation:"يمكننا من الأدلة أن نستنتج أن النظام تعرض للاختراق في وقت سابق.",
        usage:"Infer is often confused with imply. The speaker or writer implies something; the listener or reader infers it."
    },

    family:[
        {partOfSpeech:"verb",word:"infer",meaning:"Reach a conclusion from evidence.",arabic:"يستنتج من الأدلة.",example:"We can infer his intention from his actions."},
        {partOfSpeech:"noun",word:"inference",meaning:"A conclusion reached from evidence.",arabic:"استنتاج.",example:"That inference is supported by the data."},
        {partOfSpeech:"adjective",word:"inferential",meaning:"Based on inference rather than direct observation.",arabic:"استدلالي قائم على الاستنتاج.",example:"The conclusion is inferential."},
        {partOfSpeech:"verb",word:"inferable",meaning:"Able to be inferred.",arabic:"يمكن استنتاجه.",example:"The meaning is inferable from the context."}
    ],

    synonyms:[
        {word:"deduce",explanation:"Reach a logical conclusion from known facts or premises.",arabic:"يستنبط."},
        {word:"conclude",explanation:"Reach a judgment or conclusion after considering information.",arabic:"يستنتج أو يخلص إلى نتيجة."},
        {word:"derive",explanation:"Obtain an idea or conclusion from a source.",arabic:"يستخلص."}
    ],

    antonyms:[
        {word:"observe",explanation:"Notice something directly through perception.",arabic:"يلاحظ مباشرة."},
        {word:"verify",explanation:"Confirm something using evidence or checking.",arabic:"يتحقق."},
        {word:"state",explanation:"Express something directly rather than deriving it.",arabic:"يصرح مباشرة."}
    ],

    dialogue:[
        {speaker:"A",english:"Did the report explicitly say that the server was attacked?",arabic:"هل قال التقرير صراحة إن الخادم تعرض لهجوم؟"},
        {speaker:"B",english:"No, but we can infer it from the logs.",arabic:"لا، لكن يمكننا استنتاج ذلك من السجلات."},
        {speaker:"A",english:"Which evidence supports that inference?",arabic:"ما الدليل الذي يدعم ذلك الاستنتاج؟"},
        {speaker:"B",english:"Several failed login attempts occurred immediately before the outage.",arabic:"حدثت عدة محاولات تسجيل دخول فاشلة مباشرة قبل الانقطاع."},
        {speaker:"A",english:"So the conclusion is not directly stated.",arabic:"إذن الاستنتاج ليس مذكورًا بشكل مباشر."},
        {speaker:"B",english:"Correct. We infer it from the available evidence.",arabic:"صحيح. نستنتجه من الأدلة المتاحة."},
        {speaker:"A",english:"That distinction is important when writing technical reports.",arabic:"هذا الفرق مهم عند كتابة التقارير التقنية."},
        {speaker:"B",english:"Absolutely. We should separate facts from inferences.",arabic:"بالتأكيد. يجب أن نفصل بين الحقائق والاستنتاجات."}
    ],

    contexts:[
        {title:"Reading",explanation:"Readers infer meanings that writers do not explicitly state.",example:"We can infer her feelings from the description.",arabic:"يمكننا استنتاج مشاعرها من الوصف."},
        {title:"Cybersecurity",explanation:"Analysts infer possible events from logs and traces.",example:"The analyst inferred that the account had been compromised.",arabic:"استنتج المحلل أن الحساب تعرض للاختراق."},
        {title:"Science",explanation:"Scientists infer explanations from observed evidence.",example:"Researchers inferred a relationship between the variables.",arabic:"استنتج الباحثون علاقة بين المتغيرات."},
        {title:"Conversation",explanation:"Listeners infer intentions from tone, wording and context.",example:"I inferred that he wanted to leave early.",arabic:"استنتجت أنه يريد المغادرة مبكرًا."},
        {title:"Data analysis",explanation:"Analysts infer patterns that are not explicitly encoded as conclusions.",example:"The trend can be inferred from the data.",arabic:"يمكن استنتاج الاتجاه من البيانات."}
    ],

    quiz:[
        {question:"What does infer mean?",options:[{text:"Reach a conclusion from evidence or clues.",correct:true},{text:"State something explicitly.",correct:false},{text:"Forget evidence.",correct:false},{text:"Invent information without evidence.",correct:false}],explanation:"Inference is evidence-based reasoning toward a conclusion."},
        {question:"What is the noun form?",options:[{text:"inference",correct:true},{text:"inferment",correct:false},{text:"inferability",correct:false},{text:"influx",correct:false}],explanation:"Inference is the noun form."},
        {question:"Who normally infers something?",options:[{text:"The listener, reader, observer, or analyst.",correct:true},{text:"Only the speaker.",correct:false},{text:"Only a lawyer.",correct:false},{text:"Only a programmer.",correct:false}],explanation:"The person interpreting evidence or communication makes the inference."},
        {question:"How does infer differ from imply?",options:[{text:"A speaker implies; a listener or reader infers.",correct:true},{text:"They are always exact synonyms.",correct:false},{text:"Infer means to speak indirectly.",correct:false},{text:"Imply means to calculate statistics.",correct:false}],explanation:"This is a classic distinction in advanced English."},
        {question:"Which sentence is correct?",options:[{text:"From the evidence, we inferred that the system had failed.",correct:true},{text:"We inferred the evidence by deleting it.",correct:false},{text:"Infer means to announce a fact directly.",correct:false},{text:"Inference requires no evidence.",correct:false}],explanation:"Inference should be based on available information or evidence."}
    ]
},

/* ==========================================================
   09 — PLAUSIBLE
   ========================================================== */

{
    sourceId:"default_009",
    id:"default_009",
    word:"plausible",
    partOfSpeech:"adjective",
    translation:"معقول / محتمل / قابل للتصديق",

    definition:{
        english:"Seeming reasonable, believable, or possible based on the available information, although not necessarily proven to be true.",
        arabic:"تصف plausible تفسيرًا أو فكرة تبدو معقولة وقابلة للتصديق، لكنها ليست بالضرورة مثبتة كحقيقة.",
        example:"Her explanation is plausible, but we need more evidence.",
        exampleTranslation:"تفسيرها معقول، لكننا نحتاج إلى مزيد من الأدلة.",
        usage:"Plausible is useful when discussing hypotheses, explanations, excuses, scenarios, theories, and possible causes."
    },

    family:[
        {partOfSpeech:"adjective",word:"plausible",meaning:"Reasonable and believable.",arabic:"معقول وقابل للتصديق.",example:"That is a plausible explanation."},
        {partOfSpeech:"adverb",word:"plausibly",meaning:"In a believable or reasonable way.",arabic:"بشكل معقول.",example:"The event could plausibly have occurred earlier."},
        {partOfSpeech:"noun",word:"plausibility",meaning:"The quality of seeming believable or reasonable.",arabic:"المعقولية أو قابلية التصديق.",example:"The theory's plausibility depends on the evidence."},
        {partOfSpeech:"antonym",word:"implausible",meaning:"Unlikely or difficult to believe.",arabic:"غير معقول أو غير محتمل.",example:"That explanation seems implausible."}
    ],

    synonyms:[
        {word:"credible",explanation:"Believable or worthy of being trusted.",arabic:"موثوق وقابل للتصديق."},
        {word:"reasonable",explanation:"Consistent with logic or common sense.",arabic:"معقول ومنطقي."},
        {word:"feasible",explanation:"Possible to achieve or carry out, especially practically.",arabic:"قابل للتنفيذ."}
    ],

    antonyms:[
        {word:"implausible",explanation:"Not reasonably believable or likely.",arabic:"غير معقول."},
        {word:"unlikely",explanation:"Not expected to happen or be true.",arabic:"غير محتمل."},
        {word:"absurd",explanation:"Clearly unreasonable or ridiculous.",arabic:"سخيف أو غير منطقي."}
    ],

    dialogue:[
        {speaker:"A",english:"Do you think his explanation is plausible?",arabic:"هل تعتقد أن تفسيره معقول؟"},
        {speaker:"B",english:"It is plausible, but we cannot treat it as a fact yet.",arabic:"إنه معقول، لكن لا يمكننا اعتباره حقيقة بعد."},
        {speaker:"A",english:"What evidence would make it more convincing?",arabic:"ما الدليل الذي سيجعله أكثر إقناعًا؟"},
        {speaker:"B",english:"We need records from the same period.",arabic:"نحتاج إلى سجلات من الفترة نفسها."},
        {speaker:"A",english:"So plausibility is not the same as proof.",arabic:"إذن المعقولية ليست هي نفسها الإثبات."},
        {speaker:"B",english:"Exactly. A plausible hypothesis can still be wrong.",arabic:"بالضبط. يمكن أن تكون الفرضية المعقولة خاطئة رغم ذلك."},
        {speaker:"A",english:"That distinction matters in research.",arabic:"هذا الفرق مهم في البحث."},
        {speaker:"B",english:"Yes. We should evaluate plausibility together with evidence.",arabic:"نعم. يجب تقييم المعقولية إلى جانب الأدلة."}
    ],

    contexts:[
        {title:"Scientific hypothesis",explanation:"A hypothesis is plausible when it fits known evidence and principles.",example:"The researchers proposed a plausible mechanism.",arabic:"اقترح الباحثون آلية معقولة."},
        {title:"Excuse",explanation:"An excuse may be plausible if it sounds believable even without proof.",example:"His excuse sounded plausible.",arabic:"بدا عذره معقولًا."},
        {title:"Scenario",explanation:"A future scenario can be plausible when it is realistically possible.",example:"That is a plausible scenario.",arabic:"ذلك سيناريو محتمل ومعقول."},
        {title:"Technical explanation",explanation:"An explanation can be plausible while still requiring verification.",example:"The hypothesis is technically plausible.",arabic:"الفرضية معقولة من الناحية التقنية."},
        {title:"Historical interpretation",explanation:"A historical interpretation may be plausible if it fits available records.",example:"The theory remains historically plausible.",arabic:"لا تزال النظرية معقولة تاريخيًا."}
    ],

    quiz:[
        {question:"Does plausible mean proven true?",options:[{text:"No. It means reasonable or believable but not necessarily proven.",correct:true},{text:"Yes, always.",correct:false},{text:"It means impossible.",correct:false},{text:"It means completely imaginary.",correct:false}],explanation:"Plausibility is not proof."},
        {question:"What is the noun form?",options:[{text:"plausibility",correct:true},{text:"plausion",correct:false},{text:"plausiveness",correct:false},{text:"plausitude",correct:false}],explanation:"Plausibility is the noun."},
        {question:"Which is an antonym?",options:[{text:"implausible",correct:true},{text:"credible",correct:false},{text:"reasonable",correct:false},{text:"feasible",correct:false}],explanation:"Implausible means difficult to believe or unlikely."},
        {question:"Why might a hypothesis be called plausible?",options:[{text:"It fits available evidence and seems reasonable.",correct:true},{text:"It has already been absolutely proven.",correct:false},{text:"It contradicts every known fact.",correct:false},{text:"It cannot be tested.",correct:false}],explanation:"Plausibility comes from reasonableness and compatibility with information."},
        {question:"Which sentence is natural?",options:[{text:"The explanation is plausible but requires further evidence.",correct:true},{text:"The explanation is plausible because it is definitely proven.",correct:false},{text:"Plausible means mathematically impossible.",correct:false},{text:"Plausibility means certainty.",correct:false}],explanation:"Plausibility and certainty are not identical."}
    ]
},

/* ==========================================================
   10 — PRECISE
   ========================================================== */

{
    sourceId:"default_010",
    id:"default_010",
    word:"precise",
    partOfSpeech:"adjective",
    translation:"دقيق / محدد / مضبوط",

    definition:{
        english:"Exact, accurate, and clearly defined, with little room for uncertainty or approximation.",
        arabic:"تعني precise شيئًا دقيقًا ومحددًا جدًا، بحيث يقل فيه الخطأ أو الغموض أو التقريب.",
        example:"Please provide precise instructions before we begin.",
        exampleTranslation:"يرجى تقديم تعليمات دقيقة قبل أن نبدأ.",
        usage:"Precise often contrasts with vague, approximate, general, or ambiguous."
    },

    family:[
        {partOfSpeech:"adjective",word:"precise",meaning:"Exact and accurate.",arabic:"دقيق ومحدد.",example:"The measurement must be precise."},
        {partOfSpeech:"noun",word:"precision",meaning:"The quality of being exact and accurate.",arabic:"الدقة.",example:"The machine operates with remarkable precision."},
        {partOfSpeech:"adverb",word:"precisely",meaning:"Exactly or with accuracy.",arabic:"بدقة أو تمامًا.",example:"That is precisely what I meant."},
        {partOfSpeech:"noun",word:"preciseness",meaning:"The quality of being precise.",arabic:"صفة الدقة والتحديد.",example:"The preciseness of the wording matters."}
    ],

    synonyms:[
        {word:"exact",explanation:"Correct in every detail.",arabic:"دقيق تمامًا."},
        {word:"accurate",explanation:"Correct and free from significant error.",arabic:"صحيح ودقيق."},
        {word:"specific",explanation:"Clearly identified rather than general.",arabic:"محدد وليس عامًا."}
    ],

    antonyms:[
        {word:"approximate",explanation:"Close to the exact value but not exact.",arabic:"تقريبي."},
        {word:"vague",explanation:"Not clearly or precisely expressed.",arabic:"غامض."},
        {word:"imprecise",explanation:"Not exact or sufficiently specific.",arabic:"غير دقيق."}
    ],

    dialogue:[
        {speaker:"A",english:"Can you give me the precise location?",arabic:"هل يمكنك إعطائي الموقع الدقيق؟"},
        {speaker:"B",english:"Yes. I will send you the exact coordinates.",arabic:"نعم. سأرسل لك الإحداثيات الدقيقة."},
        {speaker:"A",english:"I need precise information because the area is large.",arabic:"أحتاج إلى معلومات دقيقة لأن المنطقة كبيرة."},
        {speaker:"B",english:"Understood. I will avoid general descriptions.",arabic:"مفهوم. سأتجنب الأوصاف العامة."},
        {speaker:"A",english:"What is the precise time of the meeting?",arabic:"ما الوقت المحدد بالضبط للاجتماع؟"},
        {speaker:"B",english:"It begins at 14:30 precisely.",arabic:"يبدأ في الساعة 14:30 بالضبط."},
        {speaker:"A",english:"That level of precision is useful.",arabic:"هذا المستوى من الدقة مفيد."},
        {speaker:"B",english:"Especially when small errors could cause delays.",arabic:"خصوصًا عندما يمكن أن تسبب الأخطاء الصغيرة تأخيرات."}
    ],

    contexts:[
        {title:"Measurement",explanation:"Precise measurements identify an exact value rather than a rough estimate.",example:"We need a precise measurement.",arabic:"نحتاج إلى قياس دقيق."},
        {title:"Language",explanation:"Precise language communicates exactly what is intended.",example:"Use precise terminology in the report.",arabic:"استخدم مصطلحات دقيقة في التقرير."},
        {title:"Time",explanation:"Precise time means a specific exact moment.",example:"The train arrived at precisely six.",arabic:"وصل القطار في السادسة تمامًا."},
        {title:"Science",explanation:"Scientific instruments often require precision to reduce measurement error.",example:"The instrument provides precise readings.",arabic:"يعطي الجهاز قراءات دقيقة."},
        {title:"Instructions",explanation:"Precise instructions minimize uncertainty about what to do.",example:"The instructions are precise and easy to follow.",arabic:"التعليمات دقيقة وسهلة الاتباع."}
    ],

    quiz:[
        {question:"What does precise emphasize?",options:[{text:"Exactness and accuracy.",correct:true},{text:"Uncertainty.",correct:false},{text:"General meaning.",correct:false},{text:"Emotional intensity.",correct:false}],explanation:"Precise emphasizes exactness and accuracy."},
        {question:"What is the noun form?",options:[{text:"precision",correct:true},{text:"precisement",correct:false},{text:"precisenessly",correct:false},{text:"precession",correct:false}],explanation:"Precision is the standard noun."},
        {question:"Which word is an antonym?",options:[{text:"approximate",correct:true},{text:"exact",correct:false},{text:"specific",correct:false},{text:"accurate",correct:false}],explanation:"Approximate contrasts with exact precision."},
        {question:"Why are precise instructions useful?",options:[{text:"They reduce uncertainty about what action is required.",correct:true},{text:"They make instructions intentionally confusing.",correct:false},{text:"They remove all need for communication.",correct:false},{text:"They always contain more words.",correct:false}],explanation:"Precision reduces ambiguity and uncertainty."},
        {question:"What does 'precisely' often mean in 'Precisely what I meant'?",options:[{text:"Exactly.",correct:true},{text:"Approximately.",correct:false},{text:"Possibly.",correct:false},{text:"Unintentionally.",correct:false}],explanation:"Precisely can mean exactly."}
    ]
},

/* ==========================================================
   11 — INEVITABLE
   ========================================================== */

{
    sourceId:"default_011",
    id:"default_011",
    word:"inevitable",
    partOfSpeech:"adjective",
    translation:"حتمي / لا مفر منه",

    definition:{
        english:"Certain to happen or occur and therefore impossible or extremely difficult to avoid.",
        arabic:"تصف inevitable شيئًا يُنظر إليه على أنه سيحدث حتمًا ولا يمكن تجنبه بسهولة.",
        example:"Some degree of change is inevitable in a growing organization.",
        exampleTranslation:"درجة معينة من التغيير أمر حتمي في منظمة تنمو.",
        usage:"Inevitable expresses strong certainty about an event or outcome, although it may sometimes reflect a judgment rather than mathematical certainty."
    },

    family:[
        {partOfSpeech:"adjective",word:"inevitable",meaning:"Certain to happen.",arabic:"حتمي.",example:"Change is inevitable."},
        {partOfSpeech:"noun",word:"inevitability",meaning:"The quality of being unavoidable.",arabic:"حتمية الوقوع.",example:"The inevitability of change is widely recognized."},
        {partOfSpeech:"adverb",word:"inevitably",meaning:"In a way that cannot be avoided.",arabic:"بشكل حتمي.",example:"Costs inevitably increase over time."},
        {partOfSpeech:"antonym",word:"avoidable",meaning:"Possible to prevent or escape.",arabic:"يمكن تجنبه.",example:"The mistake was avoidable."}
    ],

    synonyms:[
        {word:"unavoidable",explanation:"Impossible or extremely difficult to prevent.",arabic:"لا يمكن تجنبه."},
        {word:"certain",explanation:"Bound to happen or be true.",arabic:"مؤكد."},
        {word:"inescapable",explanation:"Impossible to escape or avoid.",arabic:"لا مفر منه."}
    ],

    antonyms:[
        {word:"avoidable",explanation:"Possible to prevent or avoid.",arabic:"قابل للتجنب."},
        {word:"preventable",explanation:"Able to be stopped from happening.",arabic:"يمكن الوقاية منه."},
        {word:"uncertain",explanation:"Not known or guaranteed to happen.",arabic:"غير مؤكد."}
    ],

    dialogue:[
        {speaker:"A",english:"Do you think technological change is inevitable?",arabic:"هل تعتقد أن التغير التكنولوجي حتمي؟"},
        {speaker:"B",english:"Change itself is inevitable, but its direction is not always predictable.",arabic:"التغيير نفسه حتمي، لكن اتجاهه ليس دائمًا قابلًا للتنبؤ."},
        {speaker:"A",english:"So organizations need to prepare for it.",arabic:"إذن يجب على المؤسسات الاستعداد له."},
        {speaker:"B",english:"Exactly. Resistance may delay change but rarely stops it completely.",arabic:"بالضبط. قد تؤخر المقاومة التغيير لكنها نادرًا ما توقفه تمامًا."},
        {speaker:"A",english:"That sounds like an important strategic principle.",arabic:"يبدو ذلك كمبدأ استراتيجي مهم."},
        {speaker:"B",english:"Organizations should focus on adaptation.",arabic:"ينبغي للمؤسسات التركيز على التكيف."},
        {speaker:"A",english:"Even if the outcome is not inevitable?",arabic:"حتى لو لم تكن النتيجة حتمية؟"},
        {speaker:"B",english:"Yes. Preparing for uncertainty is different from assuming every outcome is inevitable.",arabic:"نعم. الاستعداد لعدم اليقين يختلف عن افتراض أن كل نتيجة حتمية."}
    ],

    contexts:[
        {title:"Change",explanation:"Change can be described as inevitable when circumstances make continued stability unrealistic.",example:"Change is inevitable in a growing industry.",arabic:"التغيير حتمي في صناعة نامية."},
        {title:"Death",explanation:"In philosophical or general contexts, death is described as inevitable because it cannot ultimately be avoided.",example:"The novel reflects on the inevitability of death.",arabic:"تتأمل الرواية في حتمية الموت."},
        {title:"Technology",explanation:"Technological disruption may be called inevitable when long-term trends make it highly difficult to avoid.",example:"Automation appears increasingly inevitable in some tasks.",arabic:"يبدو التشغيل الآلي حتميًا بشكل متزايد في بعض المهام."},
        {title:"Conflict",explanation:"Conflict is not inherently inevitable; the word is appropriate only when circumstances strongly point toward it.",example:"The conflict was not inevitable.",arabic:"لم يكن الصراع حتميًا."},
        {title:"Consequences",explanation:"A consequence may be inevitable when every realistic path leads toward it.",example:"Some financial consequences became inevitable.",arabic:"أصبحت بعض العواقب المالية حتمية."}
    ],

    quiz:[
        {question:"What does inevitable mean?",options:[{text:"Certain or extremely difficult to avoid.",correct:true},{text:"Easy to prevent.",correct:false},{text:"Purely imaginary.",correct:false},{text:"Always unexpected.",correct:false}],explanation:"Inevitable describes something that cannot realistically be avoided."},
        {question:"What is the noun form?",options:[{text:"inevitability",correct:true},{text:"inevitation",correct:false},{text:"inevitablement",correct:false},{text:"inevitance",correct:false}],explanation:"Inevitability is the noun."},
        {question:"Which is an antonym?",options:[{text:"avoidable",correct:true},{text:"unavoidable",correct:false},{text:"inescapable",correct:false},{text:"certain",correct:false}],explanation:"Avoidable is the direct opposite."},
        {question:"Does inevitable always mean mathematically certain?",options:[{text:"No; it can express a strong judgment that something cannot realistically be avoided.",correct:true},{text:"Yes, in every context.",correct:false},{text:"No, it means impossible.",correct:false},{text:"Yes, but only in poetry.",correct:false}],explanation:"Inevitable is often a strong practical judgment."},
        {question:"Which sentence is natural?",options:[{text:"Some degree of change is inevitable.",correct:true},{text:"Inevitable means optional.",correct:false},{text:"An inevitable event is easy to prevent.",correct:false},{text:"Inevitable means uncertain.",correct:false}],explanation:"The example reflects the core meaning of inevitable."}
    ]
},

/* ==========================================================
   12 — CONVENTIONAL
   ========================================================== */

{
    sourceId:"default_012",
    id:"default_012",
    word:"conventional",
    partOfSpeech:"adjective",
    translation:"تقليدي / متعارف عليه / مألوف",

    definition:{
        english:"Based on established customs, practices, standards, or generally accepted ways of doing something rather than being unusual or innovative.",
        arabic:"تصف conventional شيئًا قائمًا على الأساليب أو الأعراف أو المعايير المتعارف عليها بدلًا من كونه جديدًا أو غير مألوف.",
        example:"The company chose a conventional approach rather than an experimental one.",
        exampleTranslation:"اختارت الشركة نهجًا تقليديًا بدلًا من نهج تجريبي.",
        usage:"Conventional can be neutral, positive, or critical depending on context. It often contrasts with innovative, unconventional, alternative, or experimental."
    },

    family:[
        {partOfSpeech:"adjective",word:"conventional",meaning:"Following established customs or methods.",arabic:"تقليدي أو متعارف عليه.",example:"They use conventional teaching methods."},
        {partOfSpeech:"noun",word:"convention",meaning:"An established practice, custom, or formal meeting depending on context.",arabic:"عرف أو اتفاقية أو مؤتمر بحسب السياق.",example:"The convention has existed for decades."},
        {partOfSpeech:"adverb",word:"conventionally",meaning:"According to established practice.",arabic:"وفق الأسلوب التقليدي.",example:"The building was conventionally designed."},
        {partOfSpeech:"noun",word:"conventionality",meaning:"The quality of following established conventions.",arabic:"التقليدية والالتزام بالأعراف.",example:"The conventionality of the design was intentional."}
    ],

    synonyms:[
        {word:"traditional",explanation:"Following long-established customs or practices.",arabic:"تقليدي."},
        {word:"standard",explanation:"Normal or generally accepted.",arabic:"قياسي أو متعارف عليه."},
        {word:"customary",explanation:"Usual according to custom.",arabic:"معتاد وفق العرف."}
    ],

    antonyms:[
        {word:"unconventional",explanation:"Different from established customs or methods.",arabic:"غير تقليدي."},
        {word:"innovative",explanation:"Introducing new ideas or methods.",arabic:"ابتكاري."},
        {word:"experimental",explanation:"Based on testing new approaches.",arabic:"تجريبي."}
    ],

    dialogue:[
        {speaker:"A",english:"Why did the team reject the unconventional proposal?",arabic:"لماذا رفض الفريق المقترح غير التقليدي؟"},
        {speaker:"B",english:"They preferred a more conventional strategy.",arabic:"فضلوا استراتيجية أكثر تقليدية."},
        {speaker:"A",english:"Was the unconventional idea actually worse?",arabic:"هل كانت الفكرة غير التقليدية أسوأ فعلًا؟"},
        {speaker:"B",english:"Not necessarily. It simply involved more uncertainty.",arabic:"ليس بالضرورة. كانت تتضمن فقط قدرًا أكبر من عدم اليقين."},
        {speaker:"A",english:"So conventional does not automatically mean better.",arabic:"إذن التقليدي لا يعني تلقائيًا أنه أفضل."},
        {speaker:"B",english:"Correct. It means it follows an established approach.",arabic:"صحيح. يعني أنه يتبع نهجًا متعارفًا عليه."},
        {speaker:"A",english:"That distinction is useful in business discussions.",arabic:"هذا الفرق مفيد في نقاشات الأعمال."},
        {speaker:"B",english:"Especially when comparing innovation with established practice.",arabic:"خصوصًا عند مقارنة الابتكار بالممارسات الراسخة."}
    ],

    contexts:[
        {title:"Business",explanation:"A conventional business strategy follows established practices.",example:"They adopted a conventional pricing model.",arabic:"اعتمدوا نموذج تسعير تقليديًا."},
        {title:"Medicine",explanation:"Conventional treatment refers to established mainstream medical practice.",example:"The patient received conventional treatment.",arabic:"تلقى المريض علاجًا تقليديًا متعارفًا عليه."},
        {title:"Culture",explanation:"A conventional custom follows accepted cultural expectations.",example:"They followed conventional wedding traditions.",arabic:"اتبعوا تقاليد زفاف تقليدية."},
        {title:"Technology",explanation:"Conventional technology may refer to established methods as opposed to experimental alternatives.",example:"The system uses conventional storage.",arabic:"يستخدم النظام تخزينًا تقليديًا."},
        {title:"Thinking",explanation:"Conventional thinking follows familiar assumptions.",example:"The problem requires more than conventional thinking.",arabic:"تتطلب المشكلة أكثر من التفكير التقليدي."}
    ],

    quiz:[
        {question:"What does conventional generally describe?",options:[{text:"Established or generally accepted methods, customs, or practices.",correct:true},{text:"Anything completely new.",correct:false},{text:"Something impossible.",correct:false},{text:"Only formal meetings.",correct:false}],explanation:"Conventional is broader than convention and refers to established practice."},
        {question:"Which is an antonym?",options:[{text:"unconventional",correct:true},{text:"traditional",correct:false},{text:"customary",correct:false},{text:"standard",correct:false}],explanation:"Unconventional means different from established practice."},
        {question:"Does conventional always mean bad?",options:[{text:"No. It is context-dependent and can be neutral or positive.",correct:true},{text:"Yes, it always criticizes tradition.",correct:false},{text:"Yes, it means obsolete.",correct:false},{text:"No, it always means innovative.",correct:false}],explanation:"The word itself is descriptive rather than inherently negative."},
        {question:"Which noun can mean an established practice?",options:[{text:"convention",correct:true},{text:"conventionality",correct:false},{text:"conversion",correct:false},{text:"concession",correct:false}],explanation:"Convention can refer to an established practice or custom."},
        {question:"What is conventional thinking?",options:[{text:"Thinking based on familiar assumptions or established approaches.",correct:true},{text:"Thinking with no assumptions at all.",correct:false},{text:"Thinking that always produces innovation.",correct:false},{text:"Thinking that cannot be communicated.",correct:false}],explanation:"Conventional thinking follows established patterns."}
    ]
},

/* ==========================================================
   13 — INTRICATE
   ========================================================== */

{
    sourceId:"default_013",
    id:"default_013",
    word:"intricate",
    partOfSpeech:"adjective",
    translation:"معقد ودقيق التفاصيل / متشابك",

    definition:{
        english:"Containing many closely connected parts, details, or complications that make something difficult to understand, create, or manage.",
        arabic:"تصف intricate شيئًا يحتوي على عدد كبير من التفاصيل أو الأجزاء المترابطة والمعقدة.",
        example:"The engineer designed an intricate security system.",
        exampleTranslation:"صمم المهندس نظامًا أمنيًا معقدًا ومتشابكًا.",
        usage:"Intricate often has a sense of complexity combined with fine detail. It can be positive when describing craftsmanship or negative when describing unnecessary complexity."
    },

    family:[
        {partOfSpeech:"adjective",word:"intricate",meaning:"Complex and detailed.",arabic:"معقد ومليء بالتفاصيل.",example:"The mechanism is intricate."},
        {partOfSpeech:"noun",word:"intricacy",meaning:"The quality or degree of being intricate.",arabic:"التعقيد والتشابك.",example:"The intricacy of the design is impressive."},
        {partOfSpeech:"adverb",word:"intricately",meaning:"In a highly detailed or complex manner.",arabic:"بطريقة معقدة ودقيقة.",example:"The pattern was intricately designed."},
        {partOfSpeech:"plural noun",word:"intricacies",meaning:"The complicated details of something.",arabic:"التفاصيل المعقدة.",example:"We need to understand the intricacies of the system."}
    ],

    synonyms:[
        {word:"complex",explanation:"Having many interconnected parts or factors.",arabic:"معقد."},
        {word:"elaborate",explanation:"Highly detailed and carefully developed.",arabic:"مفصل ومتطور بعناية."},
        {word:"complicated",explanation:"Difficult to understand or deal with because of many parts.",arabic:"معقد وصعب التعامل معه."}
    ],

    antonyms:[
        {word:"simple",explanation:"Easy to understand or consisting of few parts.",arabic:"بسيط."},
        {word:"straightforward",explanation:"Easy to understand or do without complications.",arabic:"مباشر وسهل."},
        {word:"basic",explanation:"Simple and fundamental rather than elaborate.",arabic:"أساسي وبسيط."}
    ],

    dialogue:[
        {speaker:"A",english:"Have you examined the new security architecture?",arabic:"هل فحصت بنية الأمن الجديدة؟"},
        {speaker:"B",english:"Yes. It is remarkably intricate.",arabic:"نعم. إنها معقدة ومتشابكة بشكل ملحوظ."},
        {speaker:"A",english:"Is that necessarily a problem?",arabic:"هل يمثل ذلك مشكلة بالضرورة؟"},
        {speaker:"B",english:"Not necessarily. Some complexity is required for the system's goals.",arabic:"ليس بالضرورة. بعض التعقيد ضروري لتحقيق أهداف النظام."},
        {speaker:"A",english:"But intricate systems can be difficult to maintain.",arabic:"لكن الأنظمة المعقدة قد تكون صعبة الصيانة."},
        {speaker:"B",english:"Exactly. We need to understand their internal intricacies.",arabic:"بالضبط. نحتاج إلى فهم تفاصيلها الداخلية المعقدة."},
        {speaker:"A",english:"So complexity should serve a purpose.",arabic:"إذن ينبغي أن يخدم التعقيد غرضًا."},
        {speaker:"B",english:"That is the principle I would use.",arabic:"هذا هو المبدأ الذي سأتبعه."}
    ],

    contexts:[
        {title:"Engineering",explanation:"An intricate machine contains many connected mechanisms.",example:"The clock has an intricate mechanism.",arabic:"للساعة آلية معقدة ومتشابكة."},
        {title:"Art",explanation:"Intricate artwork contains fine and numerous details.",example:"The artist created an intricate pattern.",arabic:"أنشأ الفنان نمطًا دقيقًا ومعقدًا."},
        {title:"Technology",explanation:"An intricate system has many interacting components.",example:"The software has an intricate architecture.",arabic:"للبرنامج بنية معقدة ومتشابكة."},
        {title:"Legal matters",explanation:"Legal cases may involve intricate relationships between rules and facts.",example:"The case involves intricate legal questions.",arabic:"تتضمن القضية مسائل قانونية معقدة."},
        {title:"Social relationships",explanation:"Human relationships can become intricate when many motivations and histories interact.",example:"Their relationship is intricate and difficult to define.",arabic:"علاقتهما معقدة وصعبة التحديد."}
    ],

    quiz:[
        {question:"What does intricate emphasize?",options:[{text:"Complexity combined with detailed interconnected parts.",correct:true},{text:"Extreme simplicity.",correct:false},{text:"Complete randomness.",correct:false},{text:"Lack of detail.",correct:false}],explanation:"Intricate combines complexity with fine detail."},
        {question:"What is the noun form?",options:[{text:"intricacy",correct:true},{text:"intrication",correct:false},{text:"intricement",correct:false},{text:"intrigue",correct:false}],explanation:"Intricacy means the quality of being intricate."},
        {question:"Can intricate be positive?",options:[{text:"Yes, especially when describing impressive craftsmanship or detail.",correct:true},{text:"No, it always means badly designed.",correct:false},{text:"Only in mathematics.",correct:false},{text:"Never.",correct:false}],explanation:"Intricate can express admiration for detail."},
        {question:"Which is an antonym?",options:[{text:"straightforward",correct:true},{text:"elaborate",correct:false},{text:"complex",correct:false},{text:"complicated",correct:false}],explanation:"Straightforward contrasts with intricate complexity."},
        {question:"What are intricacies?",options:[{text:"Complicated details or aspects of something.",correct:true},{text:"Simple summaries only.",correct:false},{text:"Errors in grammar.",correct:false},{text:"Only physical objects.",correct:false}],explanation:"Intricacies are the detailed complexities of something."}
    ]
},

/* ==========================================================
   14 — SUSTAIN
   ========================================================== */

{
    sourceId:"default_014",
    id:"default_014",
    word:"sustain",
    partOfSpeech:"verb",
    translation:"يحافظ على / يدعم / يستمر في تحمل",

    definition:{
        english:"To maintain, support, or keep something continuing over a period of time; it can also mean to endure damage or pressure.",
        arabic:"تعني sustain الحفاظ على شيء واستمراره، أو دعمه، وقد تعني أيضًا تحمل ضرر أو ضغط.",
        example:"The organization needs enough revenue to sustain its operations.",
        exampleTranslation:"تحتاج المنظمة إلى إيرادات كافية للحفاظ على عملياتها.",
        usage:"Sustain has several important meanings. It can mean maintain, support, endure, or keep alive depending on context."
    },

    family:[
        {partOfSpeech:"verb",word:"sustain",meaning:"Maintain or support over time.",arabic:"يحافظ على أو يدعم.",example:"We need resources to sustain growth."},
        {partOfSpeech:"noun",word:"sustainability",meaning:"The ability to continue without exhausting resources.",arabic:"الاستدامة.",example:"Environmental sustainability is a major concern."},
        {partOfSpeech:"adjective",word:"sustainable",meaning:"Able to continue over the long term without unacceptable harm.",arabic:"مستدام وقابل للاستمرار.",example:"The model is economically sustainable."},
        {partOfSpeech:"noun",word:"sustenance",meaning:"Food, support, or something necessary for continued existence.",arabic:"الغذاء أو الدعم الضروري للاستمرار.",example:"The community depends on agriculture for sustenance."}
    ],

    synonyms:[
        {word:"maintain",explanation:"Keep something at the same level or condition.",arabic:"يحافظ على."},
        {word:"support",explanation:"Provide what is necessary for continuation.",arabic:"يدعم."},
        {word:"preserve",explanation:"Keep something from being lost or damaged.",arabic:"يحافظ على ويصون."}
    ],

    antonyms:[
        {word:"abandon",explanation:"Leave something completely or stop supporting it.",arabic:"يتخلى عن."},
        {word:"undermine",explanation:"Weaken something gradually or indirectly.",arabic:"يقوض."},
        {word:"discontinue",explanation:"Stop something from continuing.",arabic:"يوقف أو ينهي."}
    ],

    dialogue:[
        {speaker:"A",english:"How can the company sustain its growth?",arabic:"كيف يمكن للشركة الحفاظ على نموها؟"},
        {speaker:"B",english:"It needs a business model that remains profitable over time.",arabic:"تحتاج إلى نموذج أعمال يبقى مربحًا مع مرور الوقت."},
        {speaker:"A",english:"So rapid growth is not enough.",arabic:"إذن النمو السريع ليس كافيًا."},
        {speaker:"B",english:"Correct. The company must sustain the resources that support expansion.",arabic:"صحيح. يجب على الشركة الحفاظ على الموارد التي تدعم التوسع."},
        {speaker:"A",english:"What about environmental sustainability?",arabic:"ماذا عن الاستدامة البيئية؟"},
        {speaker:"B",english:"That matters too. Growth should not permanently damage the environment.",arabic:"ذلك مهم أيضًا. لا ينبغي أن يؤدي النمو إلى إلحاق ضرر دائم بالبيئة."},
        {speaker:"A",english:"The word sustain seems to have several meanings.",arabic:"يبدو أن لكلمة sustain عدة معانٍ."},
        {speaker:"B",english:"Exactly. Context determines whether it means maintain, support, or endure.",arabic:"بالضبط. السياق يحدد ما إذا كانت تعني يحافظ أو يدعم أو يتحمل."}
    ],

    contexts:[
        {title:"Business",explanation:"Sustain means keep an operation functioning over time.",example:"The revenue is enough to sustain the business.",arabic:"الإيرادات كافية للحفاظ على استمرارية العمل."},
        {title:"Environment",explanation:"Sustainability concerns maintaining human activity without exhausting natural systems.",example:"We need sustainable energy sources.",arabic:"نحتاج إلى مصادر طاقة مستدامة."},
        {title:"Physical damage",explanation:"Sustain can mean suffer or endure an injury or damage.",example:"The building sustained serious damage.",arabic:"تعرض المبنى لأضرار جسيمة."},
        {title:"Argument",explanation:"An argument can be sustained when it is supported by evidence.",example:"The evidence sustains the conclusion.",arabic:"تدعم الأدلة الاستنتاج."},
        {title:"Life",explanation:"Sustain can mean provide what is necessary to continue living.",example:"The food sustained them during the journey.",arabic:"وفر لهم الطعام ما يحتاجونه للبقاء أثناء الرحلة."}
    ],

    quiz:[
        {question:"Which meaning of sustain fits 'sustain business growth'?",options:[{text:"Maintain or support over time.",correct:true},{text:"Destroy.",correct:false},{text:"Abandon.",correct:false},{text:"Predict.",correct:false}],explanation:"In business, sustain commonly means maintain or support continued activity."},
        {question:"Which word comes from sustain?",options:[{text:"sustainability",correct:true},{text:"sustentioning",correct:false},{text:"sustenanceful",correct:false},{text:"sustainmently",correct:false}],explanation:"Sustainability is the standard abstract noun."},
        {question:"What does 'sustained damage' mean?",options:[{text:"Damage that was suffered or received.",correct:true},{text:"Damage that was prevented.",correct:false},{text:"Damage that was imagined.",correct:false},{text:"Damage that never occurred.",correct:false}],explanation:"Sustain can mean experience or suffer damage."},
        {question:"Which is an antonym of sustain?",options:[{text:"discontinue",correct:true},{text:"maintain",correct:false},{text:"support",correct:false},{text:"preserve",correct:false}],explanation:"Discontinue means stop something from continuing."},
        {question:"Why is context important with sustain?",options:[{text:"It can mean maintain, support, endure, or provide sustenance depending on context.",correct:true},{text:"It has only one meaning.",correct:false},{text:"It is used only in environmental English.",correct:false},{text:"It is never used with abstract ideas.",correct:false}],explanation:"Sustain is highly context-dependent."}
    ]
},

/* ==========================================================
   15 — UNDERMINE
   ========================================================== */

{
    sourceId:"default_015",
    id:"default_015",
    word:"undermine",
    partOfSpeech:"verb",
    translation:"يقوض / يضعف تدريجيًا",

    definition:{
        english:"To weaken a person, system, argument, institution, or confidence, often gradually or indirectly.",
        arabic:"تعني undermine إضعاف شيء أو شخص أو نظام بشكل تدريجي، وغالبًا بطريقة غير مباشرة.",
        example:"Constant criticism can undermine an employee's confidence.",
        exampleTranslation:"يمكن أن يؤدي النقد المستمر إلى تقويض ثقة الموظف بنفسه.",
        usage:"Undermine often implies a hidden, indirect, or gradual weakening rather than an obvious direct attack."
    },

    family:[
        {partOfSpeech:"verb",word:"undermine",meaning:"Weaken gradually or indirectly.",arabic:"يقوض أو يضعف تدريجيًا.",example:"The rumors undermined public trust."},
        {partOfSpeech:"noun",word:"undermining",meaning:"The act of weakening something indirectly.",arabic:"عملية التقويض.",example:"The policy was criticized for undermining trust."},
        {partOfSpeech:"adjective",word:"undermined",meaning:"Weakened or damaged in strength or credibility.",arabic:"تم تقويضه أو إضعافه.",example:"The institution's credibility was undermined."},
        {partOfSpeech:"related",word:"underminer",meaning:"A person or factor that weakens something.",arabic:"شخص أو عامل يقوض شيئًا.",example:"Poor communication can be an underminer of trust."}
    ],

    synonyms:[
        {word:"weaken",explanation:"Make something less strong or effective.",arabic:"يضعف."},
        {word:"erode",explanation:"Gradually reduce strength, confidence, or value.",arabic:"يستنزف أو يقوض تدريجيًا."},
        {word:"sabotage",explanation:"Deliberately damage or obstruct something.",arabic:"يخرب أو يعطل عمدًا."}
    ],

    antonyms:[
        {word:"strengthen",explanation:"Make something stronger or more effective.",arabic:"يقوي."},
        {word:"reinforce",explanation:"Strengthen or support something.",arabic:"يعزز ويدعم."},
        {word:"bolster",explanation:"Support or improve something.",arabic:"يدعم ويعزز."}
    ],

    dialogue:[
        {speaker:"A",english:"Why is employee morale falling?",arabic:"لماذا تنخفض معنويات الموظفين؟"},
        {speaker:"B",english:"Constant uncertainty is undermining their confidence.",arabic:"عدم اليقين المستمر يقوض ثقتهم."},
        {speaker:"A",english:"Is the effect immediate?",arabic:"هل التأثير فوري؟"},
        {speaker:"B",english:"Usually not. It can happen gradually.",arabic:"عادة لا. يمكن أن يحدث تدريجيًا."},
        {speaker:"A",english:"So even small problems can undermine trust over time.",arabic:"إذن حتى المشكلات الصغيرة يمكن أن تقوض الثقة بمرور الوقت."},
        {speaker:"B",english:"Exactly. Trust is difficult to build and easy to undermine.",arabic:"بالضبط. بناء الثقة صعب وتقويضها سهل."},
        {speaker:"A",english:"What could strengthen it again?",arabic:"ما الذي يمكن أن يقويها من جديد؟"},
        {speaker:"B",english:"Transparent communication and consistent action.",arabic:"التواصل الشفاف والعمل المتسق."}
    ],

    contexts:[
        {title:"Confidence",explanation:"Criticism or repeated failure can gradually weaken confidence.",example:"The setbacks undermined his confidence.",arabic:"قوضت الانتكاسات ثقته بنفسه."},
        {title:"Trust",explanation:"Dishonest behavior can gradually damage trust.",example:"The scandal undermined public trust.",arabic:"قوضت الفضيحة ثقة الجمهور."},
        {title:"Argument",explanation:"Weak evidence can damage the credibility of an argument.",example:"The contradiction undermined her argument.",arabic:"قوض التناقض حجتها."},
        {title:"Institution",explanation:"Repeated failures can weaken an institution's authority or credibility.",example:"Corruption undermined the institution.",arabic:"قوض الفساد المؤسسة."},
        {title:"Security",explanation:"A vulnerability can weaken the effectiveness of a security system.",example:"The flaw undermined the security model.",arabic:"قوض الخلل نموذج الأمن."}
    ],

    quiz:[
        {question:"What does undermine emphasize?",options:[{text:"Gradual or indirect weakening.",correct:true},{text:"Immediate strengthening.",correct:false},{text:"Complete repair.",correct:false},{text:"Simple observation.",correct:false}],explanation:"Undermine commonly implies gradual or indirect weakening."},
        {question:"Which word is closely related to undermine?",options:[{text:"erode",correct:true},{text:"bolster",correct:false},{text:"reinforce",correct:false},{text:"strengthen",correct:false}],explanation:"Erode can metaphorically describe gradual weakening."},
        {question:"Which is an antonym?",options:[{text:"bolster",correct:true},{text:"weaken",correct:false},{text:"erode",correct:false},{text:"sabotage",correct:false}],explanation:"Bolster means support or strengthen."},
        {question:"Can a contradiction undermine an argument?",options:[{text:"Yes, if it damages the argument's credibility or logic.",correct:true},{text:"No, contradictions always strengthen arguments.",correct:false},{text:"Only in poetry.",correct:false},{text:"Only if the argument is spoken.",correct:false}],explanation:"Contradictions can weaken the credibility of reasoning."},
        {question:"What does 'undermine trust' mean?",options:[{text:"Gradually weaken people's confidence or trust.",correct:true},{text:"Build trust quickly.",correct:false},{text:"Measure trust statistically.",correct:false},{text:"Ignore trust completely.",correct:false}],explanation:"Undermine trust means damage it, often gradually."}
    ]
},

/* ==========================================================
   16 — CONCEDE
   ========================================================== */

{
    sourceId:"default_016",
    id:"default_016",
    word:"concede",
    partOfSpeech:"verb",
    translation:"يقر / يعترف / يتنازل",

    definition:{
        english:"To admit that something is true or valid, especially after initially resisting it; it can also mean to give something up or allow something.",
        arabic:"تعني concede الاعتراف بصحة نقطة أو حقيقة بعد مقاومة أو خلاف، وقد تعني أيضًا التنازل عن شيء.",
        example:"The researcher conceded that the criticism was justified.",
        exampleTranslation:"أقر الباحث بأن الانتقاد كان مبررًا.",
        usage:"Concede is common in debates, negotiations, sports, politics, academic discussion, and competitive contexts."
    },

    family:[
        {partOfSpeech:"verb",word:"concede",meaning:"Admit something or give something up.",arabic:"يقر أو يتنازل.",example:"She conceded that he had a valid point."},
        {partOfSpeech:"noun",word:"concession",meaning:"An admission or something given up during negotiation.",arabic:"إقرار أو تنازل.",example:"The company made several concessions."},
        {partOfSpeech:"adjective",word:"conceded",meaning:"Admitted or accepted as true.",arabic:"مُقر به أو معترف به.",example:"That point is now conceded."},
        {partOfSpeech:"noun",word:"concessionaire",meaning:"A person or company granted a concession to operate a service or business.",arabic:"صاحب امتياز أو جهة حاصلة على حق تشغيل.",example:"The concessionaire manages the facility."}
    ],

    synonyms:[
        {word:"admit",explanation:"Accept or acknowledge that something is true.",arabic:"يعترف."},
        {word:"acknowledge",explanation:"Recognize a fact or valid point.",arabic:"يقر أو يعترف بوجود حقيقة."},
        {word:"yield",explanation:"Give way or surrender a position.",arabic:"يتنازل أو يرضخ."}
    ],

    antonyms:[
        {word:"deny",explanation:"Say that something is not true.",arabic:"ينكر."},
        {word:"reject",explanation:"Refuse to accept something.",arabic:"يرفض."},
        {word:"contest",explanation:"Challenge the validity or truth of something.",arabic:"يطعن أو يعارض."}
    ],

    dialogue:[
        {speaker:"A",english:"Did the manager accept our criticism?",arabic:"هل قبل المدير انتقادنا؟"},
        {speaker:"B",english:"Eventually, yes. He conceded that our evidence was strong.",arabic:"في النهاية نعم. أقر بأن أدلتنا قوية."},
        {speaker:"A",english:"Was that easy for him?",arabic:"هل كان ذلك سهلًا عليه؟"},
        {speaker:"B",english:"Not at first. He defended the original decision.",arabic:"ليس في البداية. دافع عن القرار الأصلي."},
        {speaker:"A",english:"So conceding a point does not necessarily mean losing the whole argument.",arabic:"إذن الإقرار بنقطة لا يعني بالضرورة خسارة الحجة كاملة."},
        {speaker:"B",english:"Exactly. You can concede one point while maintaining your broader position.",arabic:"بالضبط. يمكنك الإقرار بنقطة مع الحفاظ على موقفك الأوسع."},
        {speaker:"A",english:"That is useful in professional negotiation.",arabic:"هذا مفيد في التفاوض المهني."},
        {speaker:"B",english:"Yes. Strategic concessions can help reach an agreement.",arabic:"نعم. يمكن للتنازلات الاستراتيجية أن تساعد في الوصول إلى اتفاق."}
    ],

    contexts:[
        {title:"Debate",explanation:"A debater concedes a point when admitting that the opponent has a valid argument.",example:"I concede that your criticism is fair.",arabic:"أقر بأن انتقادك عادل."},
        {title:"Negotiation",explanation:"A party concedes when it gives up part of its demands.",example:"They conceded on the delivery date.",arabic:"تنازلوا بشأن موعد التسليم."},
        {title:"Sports",explanation:"A competitor may concede defeat when accepting that they have lost.",example:"The team conceded defeat.",arabic:"أقر الفريق بالهزيمة."},
        {title:"Academic writing",explanation:"Writers can concede a limitation before presenting a stronger argument.",example:"The study concedes that the sample was small.",arabic:"تقر الدراسة بأن العينة كانت صغيرة."},
        {title:"General admission",explanation:"A person may concede a fact after initially resisting it.",example:"He finally conceded that she was right.",arabic:"أقر أخيرًا بأنها كانت على حق."}
    ],

    quiz:[
        {question:"What does concede often mean in a debate?",options:[{text:"Admit that an opposing point is valid.",correct:true},{text:"Invent an argument.",correct:false},{text:"Refuse every point.",correct:false},{text:"Avoid the topic.",correct:false}],explanation:"Concede can mean admit a valid point after resistance."},
        {question:"What is the noun form?",options:[{text:"concession",correct:true},{text:"concedement",correct:false},{text:"concedency",correct:false},{text:"concessioning",correct:false}],explanation:"Concession is the noun form."},
        {question:"Which is an antonym?",options:[{text:"deny",correct:true},{text:"acknowledge",correct:false},{text:"admit",correct:false},{text:"yield",correct:false}],explanation:"Deny means reject the truth of something."},
        {question:"Can you concede one point while maintaining your overall argument?",options:[{text:"Yes.",correct:true},{text:"No, conceding one point means losing everything.",correct:false},{text:"Only in sports.",correct:false},{text:"Only in legal writing.",correct:false}],explanation:"Concession can be limited to one point."},
        {question:"What can a concession mean in negotiation?",options:[{text:"Something given up to help reach agreement.",correct:true},{text:"A guaranteed victory.",correct:false},{text:"A refusal to negotiate.",correct:false},{text:"A factual error.",correct:false}],explanation:"A concession is something one party gives up during negotiation."}
    ]
},

/* ==========================================================
   17 — DISTORT
   ========================================================== */

{
    sourceId:"default_017",
    id:"default_017",
    word:"distort",
    partOfSpeech:"verb",
    translation:"يشوه / يحرف / يغير الصورة الحقيقية",

    definition:{
        english:"To change the appearance, meaning, or representation of something so that it becomes inaccurate, misleading, or unnatural.",
        arabic:"تعني distort تغيير الحقيقة أو الشكل أو المعنى بطريقة تجعله غير دقيق أو مضللًا.",
        example:"Selective statistics can distort the public's understanding of the issue.",
        exampleTranslation:"يمكن للإحصاءات الانتقائية أن تشوه فهم الجمهور للقضية.",
        usage:"Distort can describe physical shapes, sound, images, facts, statistics, memories, arguments, or perceptions."
    },

    family:[
        {partOfSpeech:"verb",word:"distort",meaning:"Twist or misrepresent something.",arabic:"يشوه أو يحرف.",example:"The article distorted the facts."},
        {partOfSpeech:"noun",word:"distortion",meaning:"A change that makes something inaccurate or abnormal.",arabic:"تشويه أو تحريف.",example:"The graph contains a serious distortion."},
        {partOfSpeech:"adjective",word:"distorted",meaning:"Changed from its accurate or natural form.",arabic:"مشوه أو محرف.",example:"The image looked distorted."},
        {partOfSpeech:"adverb",word:"distortedly",meaning:"In a distorted manner; uncommon and less natural than distorted.",arabic:"بطريقة مشوهة؛ استعمالها أقل شيوعًا.",example:"The sound emerged distortedly."}
    ],

    synonyms:[
        {word:"misrepresent",explanation:"Present something inaccurately or misleadingly.",arabic:"يمثل الشيء بشكل مضلل."},
        {word:"twist",explanation:"Change meaning or facts in a misleading way.",arabic:"يلوي أو يحرف المعنى."},
        {word:"deform",explanation:"Change physical shape unnaturally.",arabic:"يشوه الشكل."}
    ],

    antonyms:[
        {word:"clarify",explanation:"Make meaning clearer and easier to understand.",arabic:"يوضح."},
        {word:"represent",explanation:"Show or describe something accurately.",arabic:"يمثل أو يصور."},
        {word:"preserve",explanation:"Keep something in its original condition or meaning.",arabic:"يحافظ على."}
    ],

    dialogue:[
        {speaker:"A",english:"Can statistics distort our understanding of a problem?",arabic:"هل يمكن للإحصاءات أن تشوه فهمنا لمشكلة؟"},
        {speaker:"B",english:"Yes, especially when important context is removed.",arabic:"نعم، خصوصًا عندما تتم إزالة السياق المهم."},
        {speaker:"A",english:"So the numbers themselves may be accurate.",arabic:"إذن قد تكون الأرقام نفسها دقيقة."},
        {speaker:"B",english:"Exactly, but their presentation can distort the overall picture.",arabic:"بالضبط، لكن طريقة عرضها يمكن أن تشوه الصورة العامة."},
        {speaker:"A",english:"That is an important distinction.",arabic:"هذا فرق مهم."},
        {speaker:"B",english:"A technically correct statistic can still create a misleading impression.",arabic:"قد تخلق إحصائية صحيحة تقنيًا انطباعًا مضللًا."},
        {speaker:"A",english:"So context protects us from distortion.",arabic:"إذن السياق يحمينا من التحريف."},
        {speaker:"B",english:"Often, yes. We need to examine how information is framed.",arabic:"غالبًا نعم. نحتاج إلى فحص كيفية تأطير المعلومات."}
    ],

    contexts:[
        {title:"Image",explanation:"A visual image is distorted when its shape is changed unnaturally.",example:"The lens distorted the image.",arabic:"شوهت العدسة الصورة."},
        {title:"Sound",explanation:"Audio becomes distorted when its signal is altered and sounds unnatural.",example:"The microphone distorted the recording.",arabic:"شوه الميكروفون التسجيل."},
        {title:"Facts",explanation:"Facts are distorted when they are presented in a misleading way.",example:"The article distorted the facts.",arabic:"حرف المقال الحقائق."},
        {title:"Statistics",explanation:"Statistics can distort perception when selected or presented without relevant context.",example:"The graph distorts the scale of the difference.",arabic:"يشوه الرسم البياني حجم الفرق."},
        {title:"Memory",explanation:"Memory can distort events over time, changing details from what actually happened.",example:"Memory can distort our perception of the past.",arabic:"يمكن للذاكرة أن تشوه تصورنا للماضي."}
    ],

    quiz:[
        {question:"What does distort mean?",options:[{text:"Change something so that its representation becomes inaccurate or misleading.",correct:true},{text:"Preserve it perfectly.",correct:false},{text:"Clarify it completely.",correct:false},{text:"Measure it precisely.",correct:false}],explanation:"Distortion changes representation away from an accurate form."},
        {question:"What is the noun form?",options:[{text:"distortion",correct:true},{text:"distortment",correct:false},{text:"distorsion",correct:false},{text:"distortance",correct:false}],explanation:"Distortion is the standard noun."},
        {question:"Can an accurate statistic contribute to a distorted impression?",options:[{text:"Yes, if it is presented without important context.",correct:true},{text:"No, accuracy always guarantees a correct impression.",correct:false},{text:"Only in mathematics.",correct:false},{text:"Only if the statistic is invented.",correct:false}],explanation:"Presentation and context can distort interpretation."},
        {question:"Which is an antonym?",options:[{text:"clarify",correct:true},{text:"misrepresent",correct:false},{text:"twist",correct:false},{text:"deform",correct:false}],explanation:"Clarify makes meaning clearer rather than distorted."},
        {question:"Can physical objects be distorted?",options:[{text:"Yes, a shape can be physically distorted.",correct:true},{text:"No, distortion only concerns language.",correct:false},{text:"Only sounds can be distorted.",correct:false},{text:"Only memories can be distorted.",correct:false}],explanation:"Distort has both physical and abstract meanings."}
    ]
},

/* ==========================================================
   18 — COMPENSATE
   ========================================================== */

{
    sourceId:"default_018",
    id:"default_018",
    word:"compensate",
    partOfSpeech:"verb",
    translation:"يعوض / يجبر / يوازن",

    definition:{
        english:"To provide something that offsets a loss, disadvantage, deficiency, or negative effect; it can also mean to balance one factor against another.",
        arabic:"تعني compensate تقديم شيء يعوض خسارة أو نقصًا أو ضررًا، أو تحقيق توازن بين عاملين.",
        example:"The company offered a refund to compensate customers for the delay.",
        exampleTranslation:"قدمت الشركة استردادًا لتعويض العملاء عن التأخير.",
        usage:"Compensate can involve money, time, effort, performance, or another benefit. It does not always mean repairing the original problem."
    },

    family:[
        {partOfSpeech:"verb",word:"compensate",meaning:"Offset a loss or disadvantage.",arabic:"يعوض أو يوازن.",example:"The bonus compensated for the extra workload."},
        {partOfSpeech:"noun",word:"compensation",meaning:"Payment or something given to offset loss or harm.",arabic:"تعويض.",example:"The customer received compensation."},
        {partOfSpeech:"adjective",word:"compensatory",meaning:"Intended to compensate for a loss or disadvantage.",arabic:"تعويضي.",example:"The company offered compensatory benefits."},
        {partOfSpeech:"noun",word:"compensator",meaning:"Something that offsets an unwanted effect.",arabic:"عامل أو جهاز تعويضي.",example:"The system includes an automatic compensator."}
    ],

    synonyms:[
        {word:"offset",explanation:"Counterbalance a negative effect with another factor.",arabic:"يعوض أو يوازن الأثر."},
        {word:"reimburse",explanation:"Pay someone back for an expense.",arabic:"يسدد أو يعوض المصاريف."},
        {word:"make up for",explanation:"Provide something that balances a deficiency or loss.",arabic:"يعوض عن."}
    ],

    antonyms:[
        {word:"deprive",explanation:"Prevent someone from having something necessary or deserved.",arabic:"يحرم."},
        {word:"worsen",explanation:"Make a situation more negative.",arabic:"يزيد سوءًا."},
        {word:"penalize",explanation:"Impose a disadvantage or punishment.",arabic:"يعاقب أو يفرض ضررًا."}
    ],

    dialogue:[
        {speaker:"A",english:"The flight was delayed for five hours.",arabic:"تأخرت الرحلة خمس ساعات."},
        {speaker:"B",english:"Did the airline compensate the passengers?",arabic:"هل عوضت شركة الطيران الركاب؟"},
        {speaker:"A",english:"They offered vouchers and partial refunds.",arabic:"قدموا قسائم واستردادًا جزئيًا للأموال."},
        {speaker:"B",english:"That can compensate for some of the inconvenience.",arabic:"يمكن أن يعوض ذلك بعض الإزعاج."},
        {speaker:"A",english:"But money cannot completely compensate for lost time.",arabic:"لكن المال لا يمكنه تعويض الوقت الضائع بالكامل."},
        {speaker:"B",english:"True. Compensation does not always restore the original situation.",arabic:"صحيح. التعويض لا يعيد دائمًا الوضع الأصلي."},
        {speaker:"A",english:"The distinction is important.",arabic:"هذا الفرق مهم."},
        {speaker:"B",english:"Yes. Compensation usually offsets a loss rather than erasing it.",arabic:"نعم. التعويض عادة يوازن الخسارة بدلًا من محوها."}
    ],

    contexts:[
        {title:"Money",explanation:"Financial compensation offsets a loss, expense, or harm.",example:"The company paid compensation for the damage.",arabic:"دفعت الشركة تعويضًا عن الضرر."},
        {title:"Work",explanation:"An employee may receive compensation for additional effort or inconvenience.",example:"They compensated her for overtime.",arabic:"عوضوها عن العمل الإضافي."},
        {title:"Performance",explanation:"One strength can compensate for a weakness in another area.",example:"His speed compensates for his lack of experience.",arabic:"سرعته تعوض عن نقص خبرته."},
        {title:"Engineering",explanation:"A system can compensate for a physical or technical effect.",example:"The software compensates for sensor errors.",arabic:"يعوض البرنامج أخطاء المستشعر."},
        {title:"Lifestyle",explanation:"A benefit can offset a disadvantage in personal decisions.",example:"The shorter commute compensates for the higher rent.",arabic:"قصر مدة التنقل يعوض عن ارتفاع الإيجار."}
    ],

    quiz:[
        {question:"What does compensate mean?",options:[{text:"Offset or make up for a loss, disadvantage, or deficiency.",correct:true},{text:"Create a new loss.",correct:false},{text:"Ignore a problem.",correct:false},{text:"Guarantee perfection.",correct:false}],explanation:"Compensation balances or offsets a negative factor."},
        {question:"What is the noun form?",options:[{text:"compensation",correct:true},{text:"compensement",correct:false},{text:"compensance",correct:false},{text:"compensatorily",correct:false}],explanation:"Compensation is the standard noun."},
        {question:"How is reimburse related to compensate?",options:[{text:"Reimburse specifically means repay an expense, while compensate is broader.",correct:true},{text:"They are always completely identical.",correct:false},{text:"Reimburse means punish.",correct:false},{text:"Compensate only refers to salaries.",correct:false}],explanation:"Reimburse is a narrower financial repayment term."},
        {question:"Can one strength compensate for a weakness?",options:[{text:"Yes, one factor can offset another.",correct:true},{text:"No, compensate only refers to money.",correct:false},{text:"Only in legal contexts.",correct:false},{text:"Only when both factors are identical.",correct:false}],explanation:"Compensate also means counterbalance."},
        {question:"Does compensation always completely repair a loss?",options:[{text:"No. It may offset a loss without restoring the original situation.",correct:true},{text:"Yes, always.",correct:false},{text:"Only with money.",correct:false},{text:"Only in business.",correct:false}],explanation:"Compensation can balance a loss without reversing it."}
    ]
},

/* ==========================================================
   19 — ARBITRARY
   ========================================================== */

{
    sourceId:"default_019",
    id:"default_019",
    word:"arbitrary",
    partOfSpeech:"adjective",
    translation:"اعتباطي / عشوائي في القرار / بلا مبرر واضح",

    definition:{
        english:"Based on personal choice, preference, or authority rather than a clear rule, reason, principle, or consistent method.",
        arabic:"تصف arbitrary قرارًا أو اختيارًا يبدو قائمًا على الرغبة الشخصية أو السلطة بدلًا من قاعدة أو سبب واضح.",
        example:"The deadline seemed arbitrary because no explanation was provided.",
        exampleTranslation:"بدا الموعد النهائي اعتباطيًا لأنه لم يتم تقديم أي تفسير.",
        usage:"Arbitrary does not simply mean random. It often implies that a choice lacks a principled justification or appears imposed without a clear rationale."
    },

    family:[
        {partOfSpeech:"adjective",word:"arbitrary",meaning:"Based on unexplained choice rather than principle.",arabic:"اعتباطي بلا مبرر واضح.",example:"The rule seems arbitrary."},
        {partOfSpeech:"noun",word:"arbitrariness",meaning:"The quality of lacking a clear rule or justification.",arabic:"الاعتباطية.",example:"The arbitrariness of the decision was criticized."},
        {partOfSpeech:"adverb",word:"arbitrarily",meaning:"Without a clear principle or reason.",arabic:"بشكل اعتباطي.",example:"The values were selected arbitrarily."},
        {partOfSpeech:"related noun",word:"arbitration",meaning:"A formal process in which a neutral party resolves a dispute; not the same meaning as arbitrary.",arabic:"التحكيم، وهو مختلف في المعنى عن arbitrary.",example:"The dispute went to arbitration."}
    ],

    synonyms:[
        {word:"capricious",explanation:"Based on sudden or unpredictable personal preference.",arabic:"مزاجي ومتقلب."},
        {word:"random",explanation:"Without a predictable pattern or deliberate method; overlaps only in some contexts.",arabic:"عشوائي، لكنه ليس دائمًا مرادفًا دقيقًا."},
        {word:"unjustified",explanation:"Not supported by a sufficient reason or explanation.",arabic:"غير مبرر."}
    ],

    antonyms:[
        {word:"reasoned",explanation:"Based on logical reasoning.",arabic:"قائم على الاستدلال."},
        {word:"systematic",explanation:"Following an organized and consistent method.",arabic:"منهجي."},
        {word:"principled",explanation:"Based on clear moral or logical principles.",arabic:"قائم على مبادئ واضحة."}
    ],

    dialogue:[
        {speaker:"A",english:"Why was the deadline changed?",arabic:"لماذا تم تغيير الموعد النهائي؟"},
        {speaker:"B",english:"I am not sure. The new date seems arbitrary.",arabic:"لست متأكدًا. يبدو أن التاريخ الجديد اعتباطي."},
        {speaker:"A",english:"Was there a reason given?",arabic:"هل تم تقديم سبب؟"},
        {speaker:"B",english:"No clear explanation was provided.",arabic:"لم يتم تقديم تفسير واضح."},
        {speaker:"A",english:"Then people may question the decision.",arabic:"إذن قد يشكك الناس في القرار."},
        {speaker:"B",english:"Exactly. A rule is easier to accept when it follows a clear principle.",arabic:"بالضبط. من الأسهل قبول القاعدة عندما تتبع مبدأ واضحًا."},
        {speaker:"A",english:"So arbitrary does not simply mean random.",arabic:"إذن arbitrary لا تعني ببساطة عشوائيًا."},
        {speaker:"B",english:"Right. It often suggests a lack of justification or consistent reasoning.",arabic:"صحيح. غالبًا ما تشير إلى غياب التبرير أو الاستدلال المتسق."}
    ],

    contexts:[
        {title:"Rules",explanation:"A rule may seem arbitrary when no rational basis is provided for it.",example:"The restriction appears arbitrary.",arabic:"يبدو القيد اعتباطيًا."},
        {title:"Numbers",explanation:"A number can be arbitrary when chosen without a relevant reason.",example:"The threshold was selected arbitrarily.",arabic:"تم اختيار الحد بشكل اعتباطي."},
        {title:"Authority",explanation:"A decision can be arbitrary when imposed solely by authority without consistent criteria.",example:"The decision was criticized as arbitrary.",arabic:"تم انتقاد القرار باعتباره اعتباطيًا."},
        {title:"Programming",explanation:"An arbitrary value may be selected without a specific semantic reason.",example:"The developer used an arbitrary identifier.",arabic:"استخدم المطور معرفًا اعتباطيًا."},
        {title:"Mathematics",explanation:"In mathematics, arbitrary can sometimes mean any chosen member without implying irrationality.",example:"Let x be an arbitrary real number.",arabic:"لتكن x عددًا حقيقيًا اختياريًا."}
    ],

    quiz:[
        {question:"What does arbitrary usually imply?",options:[{text:"A choice lacking a clear rule, reason, or principle.",correct:true},{text:"A perfectly systematic choice.",correct:false},{text:"A choice that is always mathematically random.",correct:false},{text:"A decision based on strong evidence.",correct:false}],explanation:"Arbitrary commonly implies lack of principled justification."},
        {question:"What is the noun form?",options:[{text:"arbitrariness",correct:true},{text:"arbitrarity",correct:false},{text:"arbitrement",correct:false},{text:"arbitration",correct:false}],explanation:"Arbitrariness is the noun form."},
        {question:"Is arbitrary always identical to random?",options:[{text:"No. Arbitrary often emphasizes lack of justification or principle.",correct:true},{text:"Yes, they are always identical.",correct:false},{text:"Arbitrary only means mathematical randomness.",correct:false},{text:"Random means principled.",correct:false}],explanation:"The two words overlap but have different implications."},
        {question:"Which is an antonym?",options:[{text:"systematic",correct:true},{text:"capricious",correct:false},{text:"unjustified",correct:false},{text:"random",correct:false}],explanation:"Systematic means following an organized method."},
        {question:"What can arbitrary mean in mathematics?",options:[{text:"Any selected member without requiring a special property.",correct:true},{text:"Always irrational.",correct:false},{text:"Always random in a statistical sense.",correct:false},{text:"Impossible to define.",correct:false}],explanation:"Mathematical usage can be more neutral than everyday usage."}
    ]
},

/* ==========================================================
   20 — PRECISELY / ROBUST CONCEPT: "ROBUST"
   ========================================================== */

{
    sourceId:"default_020",
    id:"default_020",
    word:"robust",
    partOfSpeech:"adjective",
    translation:"متين / قوي / متين الأداء / قادر على تحمل الظروف",

    definition:{
        english:"Strong, reliable, and capable of continuing to function effectively despite stress, variation, difficulty, or changing conditions.",
        arabic:"تصف robust شخصًا أو نظامًا أو تصميمًا قويًا وموثوقًا قادرًا على العمل جيدًا رغم الضغوط أو الظروف المتغيرة.",
        example:"The application needs a robust architecture that can handle unexpected traffic.",
        exampleTranslation:"يحتاج التطبيق إلى بنية قوية قادرة على التعامل مع حركة مرور غير متوقعة.",
        usage:"Robust is extremely useful in technology, cybersecurity, business, engineering, statistics, and everyday English. It often implies strength plus reliability under imperfect conditions."
    },

    family:[
        {partOfSpeech:"adjective",word:"robust",meaning:"Strong and reliable under difficult conditions.",arabic:"قوي وموثوق في الظروف الصعبة.",example:"We need a robust solution."},
        {partOfSpeech:"noun",word:"robustness",meaning:"The quality of being strong and resistant to problems.",arabic:"المتانة والقدرة على تحمل الظروف.",example:"The robustness of the design was tested."},
        {partOfSpeech:"adverb",word:"robustly",meaning:"In a strong or resilient manner.",arabic:"بطريقة قوية ومتينة.",example:"The system was robustly designed."},
        {partOfSpeech:"related",word:"robustly tested",meaning:"Tested under varied or demanding conditions.",arabic:"مختبر بقوة وتحت ظروف متعددة.",example:"The software was robustly tested before release."}
    ],

    synonyms:[
        {word:"resilient",explanation:"Able to recover or continue functioning after difficulty.",arabic:"صامد وقادر على التعافي."},
        {word:"sturdy",explanation:"Physically strong and not easily damaged.",arabic:"متين وقوي."},
        {word:"durable",explanation:"Able to remain usable for a long time.",arabic:"متين وطويل العمر."}
    ],

    antonyms:[
        {word:"fragile",explanation:"Easily broken or damaged.",arabic:"هش."},
        {word:"weak",explanation:"Lacking strength or effectiveness.",arabic:"ضعيف."},
        {word:"vulnerable",explanation:"Easily harmed or affected by problems.",arabic:"عرضة للضرر."}
    ],

    dialogue:[
        {speaker:"A",english:"How reliable is the new application?",arabic:"ما مدى موثوقية التطبيق الجديد؟"},
        {speaker:"B",english:"The architecture is designed to be robust.",arabic:"البنية مصممة لتكون قوية ومتينة."},
        {speaker:"A",english:"What happens if traffic suddenly increases?",arabic:"ماذا يحدث إذا ارتفعت حركة المرور فجأة؟"},
        {speaker:"B",english:"The system can scale and continue operating under pressure.",arabic:"يمكن للنظام التوسع والاستمرار في العمل تحت الضغط."},
        {speaker:"A",english:"Was it tested under unusual conditions?",arabic:"هل تم اختباره تحت ظروف غير معتادة؟"},
        {speaker:"B",english:"Yes. We tested multiple failure scenarios.",arabic:"نعم. اختبرنا عدة سيناريوهات للفشل."},
        {speaker:"A",english:"That is important for a security-sensitive application.",arabic:"هذا مهم لتطبيق حساس من الناحية الأمنية."},
        {speaker:"B",english:"Exactly. Robustness matters when perfect conditions cannot be guaranteed.",arabic:"بالضبط. المتانة مهمة عندما لا يمكن ضمان ظروف مثالية."}
    ],

    contexts:[
        {title:"Software",explanation:"A robust program continues working despite unexpected inputs or conditions.",example:"The parser is robust against malformed input.",arabic:"المحلل قادر على التعامل مع المدخلات غير الصحيحة."},
        {title:"Cybersecurity",explanation:"A robust security architecture continues protecting systems despite attempted failures or attacks.",example:"The organization needs a robust security model.",arabic:"تحتاج المنظمة إلى نموذج أمني قوي."},
        {title:"Business",explanation:"A robust business model can tolerate market variation.",example:"The company has a robust revenue model.",arabic:"تمتلك الشركة نموذج إيرادات متينًا."},
        {title:"Statistics",explanation:"A robust statistical method remains reliable when assumptions are not perfectly satisfied.",example:"The method is robust to outliers.",arabic:"الطريقة متينة أمام القيم الشاذة."},
        {title:"Physical object",explanation:"A robust object is physically strong and resistant to damage.",example:"The equipment has a robust construction.",arabic:"للمعدات بنية متينة."}
    ],

    quiz:[
        {question:"What does robust emphasize?",options:[{text:"Strength and reliable performance under difficult or variable conditions.",correct:true},{text:"Fragility.",correct:false},{text:"Temporary performance only.",correct:false},{text:"Complete lack of testing.",correct:false}],explanation:"Robust combines strength, reliability and tolerance of variation."},
        {question:"What is the noun form?",options:[{text:"robustness",correct:true},{text:"robustity",correct:false},{text:"robustance",correct:false},{text:"robustment",correct:false}],explanation:"Robustness is the standard noun."},
        {question:"Which is an antonym?",options:[{text:"fragile",correct:true},{text:"sturdy",correct:false},{text:"durable",correct:false},{text:"resilient",correct:false}],explanation:"Fragile contrasts with robust strength."},
        {question:"What does robust software do?",options:[{text:"Continues working reliably despite unexpected conditions or inputs.",correct:true},{text:"Works only in perfect conditions.",correct:false},{text:"Always avoids all errors.",correct:false},{text:"Never requires testing.",correct:false}],explanation:"Robustness concerns tolerance of imperfect conditions."},
        {question:"Can robust be used in statistics?",options:[{text:"Yes, especially for methods that remain reliable when assumptions are imperfect.",correct:true},{text:"No, it only describes physical objects.",correct:false},{text:"Only in informal speech.",correct:false},{text:"Only for averages.",correct:false}],explanation:"Robust is an important technical term in statistics."}
    ]
}

];