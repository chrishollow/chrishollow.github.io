/**
 * christianbokoto.com — Language Switcher
 * Supports: English (default), French, Dutch
 */

const TRANSLATIONS = {
  en: {
    'nav.home':'Home','nav.services':'Services','nav.contact':'Contact','nav.profile':'Profile',
    'footer.questions':'More questions? Call me','footer.latest_updates':'Latest Updates','footer.quick_links':'Quick Links','footer.connect':'Connect',
    'footer.post1':'Completed Erasmus+ Leadership Training in Hungary','footer.post2':'New web development projects launching soon',
    'footer.copyright':'Copyright © 2026 Christian Bokoto. All Rights Reserved',
    'label.contact':'Contact','label.services':'Services','label.testimonials':'Testimonials','label.portfolio':'Portfolio',
    'label.skills':'Skills','label.experience':'Experience','label.about':'About Me','label.core_values':'Core Values',
    'label.why_me':'Why Me','label.inspirations':'Inspirations','label.core_comp':'Core Competencies',
    'contact.me':"Get in Touch",'contact.heading':"Let's discuss your project",'contact.name_ph':'Your name','contact.email_ph':'Your email',
    'contact.message_ph':'Your message','contact.submit':'Send your message','contact.sending':'Sending...','contact.chars':'characters',
    'contact.call':'Call me!','contact.location':'My Location',
    'about.heading':'Why hire me for your next project?',
    'about.p1':'Results-driven professional with hands-on experience in technical support, system administration, web development, and team leadership. Known for efficient problem-solving and delivering positive outcomes.',
    'about.li1':'Highly motivated with a desire to take on new challenges, adept at working effectively unsupervised and quickly mastering new skills.',
    'about.li2':'Strong background in strategic planning, risk management, and effective communication. Detail-oriented with proven leadership abilities.',
    'about.download_cv':'Download CV',
    'services.heading':'What I do<br> for my clients.','services.p':'From web development to project management, I provide comprehensive technological and leadership solutions tailored to your needs.',
    'services.work_together':"Let's work together.",'services.web_title':'Web Development',
    'services.web_p':'Creating responsive, user-friendly websites using HTML, CSS, and JavaScript. From design to deployment, I build digital experiences with modern frameworks and best practices.',
    'services.pm_title':'Project Management',
    'services.pm_p':'Strategic planning, risk management, and team coordination backed by Erasmus+ leadership training. Delivering projects on time with comprehensive documentation and stakeholder communication.',
    'services.it_title':'IT Technical Support',
    'services.it_p':'Expert troubleshooting for hardware and software issues. Network configuration, system maintenance, and IT asset management to keep your operations running smoothly.',
    'services.read_more':'Read More',
    'resume.heading':'My Professional Journey','resume.p':'From technical support to leadership development, explore the experiences that shaped my career.',
    'resume.education_label':'Education',
    'resume.tab1_title':'Fundraising Associate at Greenpeace Belgium',
    'resume.tab1_p1':'Collaborated with team members to create innovative strategies for increasing donations and community engagement. Connected with donors through multiple channels including phone, email, and in-person interactions, building lasting relationships with supporters.',
    'resume.tab1_p2':'Articulated campaign vision and purpose to potential donors while employing quality persuasion techniques. Attended team meetings and actively contributed to campaign planning, demonstrating strong collaboration and communication skills in a mission-driven environment.',
    'resume.tab2_title':'IT Technician at Bruxelles Environnement',
    'resume.tab2_p1':'Installed and configured hardware, software, systems, networks, printers, and scanners across the organization. Provided technical support to users via telephone and remote access, ensuring minimal downtime and optimal system performance.',
    'resume.tab2_p2':'Troubleshot complex system issues related to network connectivity, software installation, and configuration. Resolved hardware problems including component replacement as necessary. Managed comprehensive inventory of IT assets including laptops, desktops, servers, and peripherals.',
    'resume.tab3_title':'Erasmus+ Leadership Training - Hungary',
    'resume.tab3_p1':'Participated in "Joyful Leadership 7.0" training course in Somogyvamos, Hungary (December 2024). Engaged in simulations, workshops, and interactive games to develop essential leadership skills including communication, strategic thinking, and understanding different leadership styles.',
    'resume.tab3_p2':'Gained tools and knowledge for mentoring others to become effective leaders. This international experience enhanced cross-cultural collaboration abilities and reinforced commitment to continuous professional development in youth work and community engagement.',
    'resume.tab4_title':'Paramedical Studies - Haute Ecole Léonard De Vinci',
    'resume.tab4_p1':"Followed paramedical education at Haute Ecole Léonard De Vinci, one of Brussels' leading institutions. This foundational training developed strong analytical thinking, attention to detail, and the ability to work effectively under pressure.",
    'resume.tab4_p2':'The healthcare background provides a unique perspective in IT work, particularly in understanding user needs, maintaining documentation standards, and ensuring systematic problem-solving approaches in technical environments.',
    'skills.heading':'Technical & Soft Skills', 't.skills':"Technical Skils", 'tech.support':"Technical Support",'net.config':"Network Configuration",
    'skills.p':'A comprehensive skill set combining technical development expertise with project management and leadership abilities gained through diverse professional experiences.',
    'portfolio.heading':'Featured Projects & Training','portfolio.p':'A showcase of professional development and international collaboration experiences that demonstrate commitment to continuous learning and leadership.',
    'portfolio.erasmus_label':'Erasmus+ Leadership Training','portfolio.web_title':'Web Development','portfolio.mgmt_title':'Team Management','portfolio.available':'Currently Available',
    'test.heading':'What colleagues say about working with me.',
    'test.t1_p':"Christian's technical expertise and problem-solving abilities made him an invaluable asset to our IT team. His dedication to ensuring smooth operations and positive user experiences consistently exceeded expectations.",
    'test.t1_author':'Colleague (Bruxelles Environnement)','test.t1_note':'*Humorously illustrated by Dwight Schrute (Rainn Wilson in The Office)*',
    'test.t2_p':'Working with Christian at Greenpeace was inspiring. His communication skills and ability to connect with people, combined with strategic thinking, made a real impact on our fundraising campaigns.',
    'test.t2_author':'Team Member (Greenpeace Belgium)','test.t2_note':'*Wittily illustrated by climate activist Greta Thunberg*',
    'my.story':"My Story",
    'about_page.hello':'Hello,',
    'about_page.h2':"I'm Christian Bokoto",
    'about_page.p1':'A highly enthusiastic and disciplined professional based in Brussels, Belgium, with a passion for technology and continuous learning. My journey spans from paramedical studies to becoming an IT technician, web developer, and project manager, demonstrating adaptability and a commitment to mastering new skills.',
    'about_page.p2':'Born on December 30, 1996, I bring a unique perspective to technology through my diverse background. My experience includes technical support at Bruxelles Environnement, fundraising campaign management at Greenpeace Belgium, and international leadership training through Erasmus+ programs.',
    'about_page.values_heading':'Principles That Guide Me','about_page.values_p':'The fundamental values that shape my approach to work, relationships, and life.',
    'about_page.austerity':'Austerity','about_page.austerity_p':"Embracing simplicity and discipline in both personal and professional life. Focusing on what truly matters by eliminating excess and maintaining clarity of purpose. This principle guides efficient resource management and thoughtful decision-making.",
    'about_page.sincerity':'Sincerity','about_page.sincerity_p':'Committing to authenticity and honesty in all interactions. Building trust through transparent communication and genuine engagement. This value ensures integrity in relationships, whether with clients, colleagues, or communities.',
    'about_page.cleanliness':'Cleanliness','about_page.cleanliness_p':'Maintaining order, clarity, and precision in work and environment. This extends beyond physical spaces to clean code, clear documentation, and organized project structures. Excellence emerges from attention to detail and systematic approaches.',
    'about_page.compassion':'Compassion',"about_page.compassion_p":"Leading with empathy and understanding toward others. Recognizing the human element in every project and interaction. This value drives user-centered design, supportive team environments, and solutions that truly serve people's needs.",
    'about_page.accountability':'Accountability','about_page.accountability_p':'Taking full ownership of commitments, actions, and outcomes. Meeting deadlines, maintaining quality standards, and following through on promises. This principle ensures reliability and builds lasting professional relationships.',
    'about_page.resilience':'Resilience','about_page.resilience_p':'Persevering through challenges with adaptability and determination. Learning from setbacks, embracing change, and maintaining forward momentum. This strength, developed through diverse experiences, enables continuous growth and success.',
    'about_page.whyme_heading':'What sets me apart?','about_page.whyme_p':'A unique blend of technical expertise, communication skills, and international perspective gained through diverse professional experiences and Erasmus+ training.',
    'about_page.whyme_li1':'Multilingual professional: Fluent in French (native), English (C2), and Dutch (B1), enabling effective communication across European markets and international teams.',
    'about_page.whyme_li2':'Proven track record in both technical environments and people-focused roles, from IT infrastructure at Bruxelles Environnement to community engagement at Greenpeace Belgium.',
    'about_page.whyme_li3':'Committed to continuous learning and leadership development, as demonstrated by participation in the Erasmus+ Joyful Leadership program in Hungary.',
    'about_page.insp_heading':'Personalities who shaped my values','about_page.spiritual_role':'Spiritual Activist','about_page.beauvoir_role':'Author, Feminist Activist',
    'about_page.quote1':"Humility does not mean to think yourself less, but to less think of yourself. Treat everyone you encounter as if the success of your life depends upon the quality of your interactions with them.",
    'about_page.quote2':"One's life has value so long as one attributes value to the life of others by means of love, friendship, indignation and compassion.",
    'about_page.bhakti':"His Holiness Bhakti Tirtha Swami",
    'services_page.banner_h1':'My Services','services_page.breadcrumb':'Services','services_page.main_heading':'Project Management Excellence',
    'services_page.main_p1':'With a unique blend of technical expertise, strategic thinking, and people-centered leadership, I bring a holistic approach to project management. My experience spans IT infrastructure at Bruxelles Environnement, community engagement at Greenpeace Belgium, and international leadership development through Erasmus+ programs.',
    'services_page.main_p2':'I excel at strategic planning, risk management, and stakeholder communication. Every project is approached with meticulous documentation, clear milestones, and adaptive problem-solving. My IT background ensures I understand technical constraints and opportunities, while my fundraising experience has sharpened my ability to articulate vision, persuade stakeholders, and maintain team motivation through complex challenges.',
    "services_page.main_p3":"Trained in Joyful Leadership methodologies during the Erasmus+ program in Hungary (December 2024), I bring proven techniques in communication, strategic thinking, and team mentorship. I don't just manage tasks, I foster core values, understand different leadership styles, and create environments where teams thrive and deliver exceptional results.",
    'services_page.approach_h':'My Approach','services_page.approach_p1':'Every project begins with deep stakeholder engagement and clear goal definition. Drawing from my diverse background, I establish comprehensive documentation, identify risks early, and create adaptive strategies that respond to changing conditions.',
    'services_page.approach_p2':'I leverage system thinking to understand how different project components interact, ensuring decisions consider both immediate impacts and long-term consequences. Communication remains central, I maintain transparent progress updates, facilitate collaboration across teams, and ensure everyone understands their role in the bigger picture.',
    'services_page.comp_h':'Core Competencies','services_page.comp_p1':'My technical foundation from IT infrastructure work at Bruxelles Environnement provides deep understanding of system architecture, network dependencies, and technical risk factors. This ensures realistic project timelines, accurate resource allocation, and effective technical team coordination.',
    'services_page.comp_p2':'Experience in fundraising campaign planning at Greenpeace Belgium has refined my skills in strategic narrative development, stakeholder persuasion, and team motivation under pressure. Combined with Joyful Leadership training, I bring sophisticated tools for conflict resolution, effective delegation, and creating high-performance team cultures where individuals feel valued and empowered to contribute their best work.',
    'services_page.skills_heading':'Skills That Drive Success','services_page.skills_p':'A comprehensive skill set developed through diverse professional experiences and specialized leadership training.',
    'services_page.web_title':'Web Development','services_page.web_p':'Full-stack web development using HTML5, CSS3, and JavaScript. Creating responsive, user-friendly applications with modern frameworks. Experience in front-end design, back-end logic, database integration, and deployment. Focus on clean code, performance optimization, accessibility standards, and SEO best practices.',
    'services_page.it_title':'IT Technical Support','services_page.it_p':'Comprehensive technical troubleshooting for hardware and software systems. Network configuration, system maintenance, and IT asset management. Experience with installation, configuration, remote support, and inventory management. Proven ability to resolve complex technical issues while maintaining excellent user experience.',
    'services_page.pm_title':'Project Management','services_page.pm_p':'Strategic planning, risk management, and comprehensive project documentation. Experience coordinating technical teams, fundraising campaigns, and international collaborations. Skilled in milestone tracking, stakeholder communication, adaptive problem-solving, and delivering projects on time while maintaining quality standards.',
    'services_page.lead_title':'Leadership','services_page.lead_p':'Trained in Joyful Leadership methodologies through Erasmus+ program. Skills include team mentorship, fostering core values, understanding different leadership styles, conflict resolution, and creating high-performance team cultures. Experience leading technical teams and coordinating community engagement initiatives.',
    'services_page.comm_title':'Effective Communication','services_page.comm_p':'Multilingual professional fluent in French (native), English (C2), and Dutch (B1). Skilled in stakeholder engagement, persuasive presentation, technical documentation, and cross-cultural communication. Experience articulating complex technical concepts to non-technical audiences and building consensus across diverse teams.',
    'services_page.sys_title':'System Thinking','services_page.sys_p':'Holistic approach to problem-solving that considers interdependencies, long-term consequences, and systemic impacts. Understanding how technical, human, and organizational elements interact. Ability to identify root causes, anticipate cascade effects, and design solutions that create sustainable positive outcomes across entire systems.',
    'contact_page.banner_h1':'Contact Me','contact_page.breadcrumb':'Contact','contact_page.map_heading':'Find Me Here',
  },

  fr: {
    'nav.home':'Accueil','nav.services':'Services','nav.contact':'Contact','nav.profile':'Profil',
    'footer.questions':"D'autres questions ? Appelez-moi",'footer.latest_updates':'Dernières nouvelles','footer.quick_links':'Liens rapides','footer.connect':'Réseaux',
    'footer.post1':'Formation Erasmus+ en leadership terminée en Hongrie','footer.post2':'Nouveaux projets web à venir prochainement',
    'footer.copyright':'Copyright © 2026 Christian Bokoto. Tous droits réservés.',
    'label.contact':'Contact','label.services':'Services','label.testimonials':'Témoignages','label.portfolio':'Portfolio',
    'label.skills':'Compétences','label.experience':'Expérience','label.about':'À propos','label.core_values':'Valeurs fondamentales',
    'label.why_me':'Pourquoi moi','label.inspirations':'Inspirations','label.core_comp':'Compétences clés',
    'contact.me':"Contactez-moi",'contact.heading':'Discutons de votre projet','contact.name_ph':'Votre nom','contact.email_ph':'Votre e-mail',
    'contact.message_ph':'Votre message','contact.submit':'Envoyer votre message','contact.sending':'Envoi en cours...','contact.chars':'caractères',
    'contact.call':'Appelez-moi !','contact.location':'Ma localisation',
    'about.heading':'Pourquoi me recruter pour votre prochain projet ?',
    'about.p1':'Professionnel axé sur les résultats, avec une expérience pratique en support technique, administration système, développement web et leadership. Reconnu pour la résolution efficace des problèmes et les résultats positifs.',
    'about.li1':'Très motivé, désireux de relever de nouveaux défis, capable de travailler de manière autonome et d\'acquérir rapidement de nouvelles compétences.',
    'about.li2':'Solide expérience en planification stratégique, gestion des risques et communication efficace. Orienté détails avec des aptitudes avérées au leadership.',
    'about.download_cv':'Télécharger le CV',
    'services.heading':'Ce que je fais<br> pour mes clients.','services.p':'Du développement web à la gestion de projet, je fournis des solutions technologiques et de leadership complètes, adaptées à vos besoins.',
    'services.work_together':'Travaillons ensemble.','services.web_title':'Développement Web',
    'services.web_p':'Création de sites web réactifs et conviviaux en HTML, CSS et JavaScript. De la conception au déploiement, je construis des expériences numériques avec des frameworks modernes.',
    'services.pm_title':'Gestion de Projet',
    'services.pm_p':'Planification stratégique, gestion des risques et coordination d\'équipe, appuyées par une formation Erasmus+ en leadership. Livraison des projets dans les délais avec documentation complète.',
    'services.it_title':'Support Technique IT',
    'services.it_p':'Dépannage expert pour les problèmes matériels et logiciels. Configuration réseau, maintenance système et gestion des actifs IT pour assurer le bon fonctionnement de vos opérations.',
    'services.read_more':'En savoir plus',
    'resume.heading':'Mon parcours professionnel','resume.p':'Du support technique au développement du leadership, découvrez les expériences qui ont façonné ma carrière.',
    'resume.education_label':'Formation',
    'resume.tab1_title':'Chargé de collecte de fonds chez Greenpeace Belgique',
    'resume.tab1_p1':"Collaboration avec l'équipe pour créer des stratégies innovantes visant à accroître les dons et l'engagement communautaire. Contact avec les donateurs via plusieurs canaux, notamment le téléphone, l'e-mail et les interactions en personne.",
    'resume.tab1_p2':'Communication de la vision et des objectifs des campagnes aux donateurs potentiels avec des techniques de persuasion. Participation active aux réunions d\'équipe et à la planification des campagnes.',
    'resume.tab2_title':'Technicien IT chez Bruxelles Environnement',
    'resume.tab2_p1':'Installation et configuration du matériel, des logiciels, des systèmes, des réseaux, des imprimantes et des scanners. Assistance technique aux utilisateurs par téléphone et accès à distance, garantissant un temps d\'arrêt minimal.',
    'resume.tab2_p2':'Résolution de problèmes complexes liés à la connectivité réseau et à la configuration. Gestion de l\'inventaire complet des équipements IT incluant ordinateurs portables, desktops, serveurs et périphériques.',
    'resume.tab3_title':'Formation Erasmus+ en leadership - Hongrie',
    'resume.tab3_p1':'Participation à la formation "Joyful Leadership 7.0" à Somogyvamos, Hongrie (décembre 2024). Ateliers, simulations et jeux interactifs pour développer des compétences essentielles en leadership.',
    'resume.tab3_p2':"Acquisition d'outils pour encadrer d'autres personnes et les aider à devenir des leaders efficaces. Cette expérience internationale a renforcé les capacités de collaboration interculturelle.",
    'resume.tab4_title':'Études paramédicales - Haute École Léonard De Vinci',
    'resume.tab4_p1':"Formation paramédicale à la Haute École Léonard De Vinci, l'une des principales institutions de Bruxelles. Développement d'une pensée analytique solide, de l'attention aux détails et de la capacité à travailler sous pression.",
    'resume.tab4_p2':'Cette expérience en soins de santé apporte une perspective unique au travail IT : compréhension des besoins utilisateurs, maintien des normes de documentation et approches systématiques de résolution de problèmes.',
    'skills.heading':'Techniques & Soft Skills','skills.p':'Un ensemble de compétences polyvalentes combinant expertise technique en développement et capacités de gestion de projet, acquises grâce à des expériences professionnelles diversifiées.',
    't.skills':"Compétences Techniques",'tech.support':"Support Technique", 'net.config':"Configuration Réseau",
    'portfolio.heading':'Projets & Formations en vedette','portfolio.p':"Une vitrine d'expériences de développement professionnel et de collaboration internationale, témoignant d'un engagement envers l'apprentissage continu.",
    'portfolio.erasmus_label':'Formation Erasmus+ en Leadership','portfolio.web_title':'Développement Web',"portfolio.mgmt_title":"Gestion d'équipe",'portfolio.available':'Disponible actuellement',
    'test.heading':'Ce que mes collègues disent de moi.',
    'test.t1_p':"L'expertise technique et les capacités de résolution de problèmes de Christian en ont fait un atout inestimable pour notre équipe IT. Son dévouement à assurer le bon fonctionnement et une expérience utilisateur positive a constamment dépassé les attentes.",
    'test.t1_author':'Collègue (Bruxelles Environnement)','test.t1_note':'*Illustré avec humour par Dwight Schrute (Rainn Wilson dans The Office)*',
    'test.t2_p':'Travailler avec Christian chez Greenpeace était inspirant. Ses compétences en communication et sa capacité à connecter avec les gens, combinées à une réflexion stratégique, ont eu un réel impact sur nos campagnes de collecte de fonds.',
    'test.t2_author':"Membre de l'équipe (Greenpeace Belgique)",'test.t2_note':'*Illustré avec esprit par la militante climatique Greta Thunberg*',
    'about_page.hello':'Bonjour,', 'my.story':'Mon Histoire',
    'about_page.h2':"Je m'appelle Christian Bokoto",
    'about_page.p1':"Professionnel enthousiaste et discipliné de Bruxelles, Belgique, passionné par la technologie et l'apprentissage continu. Mon parcours s'étend des études paramédicales à technicien IT, développeur web et chef de projet.",
    'about_page.p2':"Né le 30 décembre 1996, j'apporte une perspective unique à la technologie grâce à mon parcours diversifié. Mon expérience inclut le support technique chez Bruxelles Environnement, la gestion de campagnes chez Greenpeace Belgique et une formation internationale en leadership via Erasmus+.",
    'about_page.values_heading':'Les principes qui me guident','about_page.values_p':'Les valeurs fondamentales qui façonnent mon approche du travail, des relations et de la vie.',
    'about_page.austerity':'Austérité','about_page.austerity_p':"Embrasser la simplicité et la discipline dans la vie personnelle et professionnelle. Se concentrer sur l'essentiel en éliminant le superflu. Ce principe guide une gestion efficace des ressources et une prise de décision réfléchie.",
    'about_page.sincerity':'Sincérité','about_page.sincerity_p':"S'engager avec authenticité et honnêteté dans toutes les interactions. Construire la confiance grâce à une communication transparente et un engagement véritable.",
    'about_page.cleanliness':'Rigueur','about_page.cleanliness_p':'Maintenir l\'ordre, la clarté et la précision dans le travail et l\'environnement : code propre, documentation claire et structures de projet organisées. L\'excellence émerge de l\'attention aux détails.',
    'about_page.compassion':'Compassion','about_page.compassion_p':"Diriger avec empathie et compréhension envers les autres. Reconnaître l'élément humain dans chaque projet. Cette valeur favorise un design centré sur l'utilisateur et des solutions qui servent véritablement les gens.",
    'about_page.accountability':'Responsabilité','about_page.accountability_p':'Assumer la pleine responsabilité des engagements, des actions et des résultats. Respecter les délais, maintenir des standards de qualité et tenir ses promesses.',
    'about_page.resilience':'Résilience','about_page.resilience_p':"Persévérer face aux défis avec adaptabilité et détermination. Apprendre des revers, embrasser le changement et maintenir l'élan vers l'avant.",
    'about_page.whyme_heading':"Qu'est ce qui me distingue ?",'about_page.whyme_p':"Un mélange unique d'expertise technique, de compétences en communication et de perspective internationale, acquis grâce à des expériences professionnelles diversifiées et à la formation Erasmus+.",
    'about_page.whyme_li1':"Professionnel multilingue : maîtrise du français (langue maternelle), de l'anglais (C2) et du néerlandais (B1), permettant une communication efficace sur les marchés européens.",
    'about_page.whyme_li2':'Bilan solide dans des environnements techniques et des rôles axés sur les personnes, de l\'infrastructure IT chez Bruxelles Environnement à l\'engagement communautaire chez Greenpeace Belgique.',
    'about_page.whyme_li3':'Engagé dans l\'apprentissage continu et le développement du leadership, comme en témoigne la participation au programme Erasmus+ Joyful Leadership en Hongrie.',
    'about_page.insp_heading':"Personnalités qui m'inspirent",'about_page.quote1':"L'humilité ce n'est pas penser de soi comme étant moins, mais moins penser qu'à soi. Traite tous ceux que tu rencontre comme si le succès de ta vie dépendait de la qualité de votre interaction",
    'about_page.bhakti':"Sa Sainteté Bhakti Tirtha Swami",
    'about_page.quote2':"La vie a de la valeur pour autant que l'on accorde de la valeur à la vie des autres par moyen de d'amour, d'amitié, d'indignation et de compassion",
    'about_page.spiritual_role':'Activiste Spirituel','about_page.beauvoir_role':'Autrice, Militante féministe',
    'services_page.banner_h1':'Mes Services','services_page.breadcrumb':'Services','services_page.main_heading':'Excellence en Gestion de Projet',
    'services_page.main_p1':"Avec une combinaison unique d'expertise technique, de réflexion stratégique et de leadership centré sur les personnes, j'apporte une approche holistique à la gestion de projet. Mon expérience couvre l'infrastructure IT chez Bruxelles Environnement, l'engagement communautaire chez Greenpeace Belgique et le développement du leadership via Erasmus+.",
    'services_page.main_p2':"J'excelle en planification stratégique, gestion des risques et communication avec les parties prenantes. Chaque projet est abordé avec une documentation méticuleuse, des jalons clairs et une résolution de problèmes adaptative.",
    'services_page.main_p3':"Formé aux méthodologies de Joyful Leadership lors du programme Erasmus+ en Hongrie (décembre 2024), j'apporte des techniques éprouvées en communication, réflexion stratégique et mentorat d'équipe.",
    'services_page.approach_h':'Mon approche','services_page.approach_p1':"Chaque projet commence par un engagement approfondi avec les parties prenantes et une définition claire des objectifs. En m'appuyant sur mon parcours diversifié, j'établis une documentation complète et crée des stratégies adaptatives.",
    'services_page.approach_p2':'Je fais appel à la pensée systémique pour comprendre comment les différentes composantes du projet interagissent. La communication reste centrale : mises à jour transparentes et clarté des rôles.',
    'services_page.comp_h':'Compétences clés','services_page.comp_p1':'Ma base technique acquise chez Bruxelles Environnement offre une compréhension approfondie de l\'architecture système et des facteurs de risque. Cela garantit des calendriers réalistes et une coordination efficace.',
    'services_page.comp_p2':"L'expérience en planification de campagnes chez Greenpeace a affiné mes compétences en persuasion des parties prenantes et motivation d'équipe. Combiné à la formation Joyful Leadership, j'apporte des outils pour la résolution de conflits et la délégation efficace.",
    'services_page.skills_heading':'Compétences au service du succès','services_page.skills_p':'Un ensemble de compétences complet, développé grâce à des expériences professionnelles diversifiées et une formation spécialisée en leadership.',
    'services_page.web_title':'Développement Web','services_page.web_p':'Développement web complet avec HTML5, CSS3 et JavaScript. Création d\'applications réactives avec frameworks modernes. Expérience en front-end, back-end, bases de données et déploiement.',
    'services_page.it_title':'Support Technique IT','services_page.it_p':'Dépannage technique complet pour les systèmes matériels et logiciels. Configuration réseau, maintenance et gestion des actifs IT. Expérience en installation, configuration et support à distance.',
    'services_page.pm_title':'Gestion de Projet','services_page.pm_p':'Planification stratégique, gestion des risques et documentation complète. Expérience dans la coordination d\'équipes techniques, de campagnes et de collaborations internationales.',
    'services_page.lead_title':'Leadership','services_page.lead_p':'Formé aux méthodologies Joyful Leadership via Erasmus+. Compétences : mentorat, développement des valeurs, compréhension des styles de leadership et résolution de conflits.',
    'services_page.comm_title':'Communication Efficace','services_page.comm_p':'Professionnel multilingue maîtrisant le français (natif), l\'anglais (C2) et le néerlandais (B1). Compétent en engagement des parties prenantes et communication interculturelle.',
    'services_page.sys_title':'Pensée Systémique','services_page.sys_p':'Approche holistique tenant compte des interdépendances et impacts à long terme. Compréhension des interactions entre éléments techniques, humains et organisationnels.',
    'contact_page.banner_h1':'Contactez-moi','contact_page.breadcrumb':'Contact','contact_page.map_heading':'Où me trouver',
  },

  nl: {
    'nav.home':'Start','nav.services':'Diensten','nav.contact':'Contact','nav.profile':'Profiel',
    'footer.questions':'Meer vragen? Bel me','footer.latest_updates':'Laatste updates','footer.quick_links':'Snelle links','footer.connect':'Verbinden',
    'footer.post1':'Erasmus+ leiderschapstraining voltooid in Hongarije','footer.post2':'Nieuwe webprojecten binnenkort beschikbaar',
    'footer.copyright':'Copyright © 2026 Christian Bokoto. Alle rechten voorbehouden.',
    'label.contact':'Contact','label.services':'Diensten','label.testimonials':'Getuigenissen','label.portfolio':'Portfolio',
    'label.skills':'Vaardigheden','label.experience':'Ervaring','label.about':'Over mij','label.core_values':'Kernwaarden',
    'label.why_me':'Waarom ik','label.inspirations':'Inspiraties','label.core_comp':'Kerncompetenties',
    'contact.me':"Neem contact met mij op",'contact.heading':'Laten we uw project bespreken','contact.name_ph':'Uw naam','contact.email_ph':'Uw e-mail',
    'contact.message_ph':'Uw bericht','contact.submit':'Stuur uw bericht','contact.sending':'Verzenden...','contact.chars':'tekens',
    'contact.call':'Bel me!','contact.location':'Mijn locatie',
    'about.heading':'Waarom mij inhuren voor uw volgende project?',
    'about.p1':'Resultaatgerichte professional met praktische ervaring in technische ondersteuning, systeembeheer, webontwikkeling en teamleiderschap. Bekend om efficiënte probleemoplossing en het behalen van positieve resultaten.',
    'about.li1':'Zeer gemotiveerd, in staat zelfstandig te werken en snel nieuwe vaardigheden te beheersen.',
    'about.li2':'Sterke achtergrond in strategische planning, risicobeheer en effectieve communicatie. Detailgericht met bewezen leiderschapskwaliteiten.',
    'about.download_cv':'CV downloaden',
    'services.heading':'Wat ik doe<br> voor mijn klanten.','services.p':'Van webontwikkeling tot projectbeheer, ik bied uitgebreide technologische en leiderschapsoplossingen op maat van uw behoeften.',
    'services.work_together':'Laten we samenwerken.','services.web_title':'Webontwikkeling',
    'services.web_p':'Responsieve, gebruiksvriendelijke websites bouwen met HTML, CSS en JavaScript. Van ontwerp tot implementatie met moderne frameworks.',
    'services.pm_title':'Projectbeheer',
    'services.pm_p':'Strategische planning, risicobeheer en teamcoördinatie, ondersteund door Erasmus+ leiderschapstraining. Projecten op tijd leveren met uitgebreide documentatie.',
    'services.it_title':'IT Technische Ondersteuning',
    'services.it_p':'Deskundige probleemoplossing voor hardware- en softwareproblemen. Netwerkconfiguratie, systeemonderhoud en IT-activabeheer om uw activiteiten vlot te laten verlopen.',
    'services.read_more':'Lees meer',
    'resume.heading':'Mijn professioneel traject','resume.p':'Van technische ondersteuning tot leiderschapsontwikkeling: ontdek de ervaringen die mijn carrière hebben gevormd.',
    'resume.education_label':'Opleiding',
    'resume.tab1_title':'Fondsenwerving bij Greenpeace België',
    'resume.tab1_p1':'Samenwerking met teamleden om innovatieve strategieën te ontwikkelen voor het verhogen van donaties en gemeenschapsbetrokkenheid. Contact met donateurs via telefoon, e-mail en persoonlijke interacties.',
    'resume.tab1_p2':'Campagnevisie communiceren aan potentiële donateurs met overtuigingstechnieken. Actieve bijdrage aan teamvergaderingen en campagneplanning.',
    'resume.tab2_title':'IT-Technicus bij Leefmilieu Brussel',
    'resume.tab2_p1':'Installatie en configuratie van hardware, software, systemen, netwerken, printers en scanners. Technische ondersteuning aan gebruikers via telefoon en externe toegang, met minimale downtime.',
    'resume.tab2_p2':'Oplossen van complexe systeemproblemen met betrekking tot netwerkconnectiviteit en configuratie. Beheer van uitgebreide IT-inventaris inclusief laptops, desktops, servers en randapparatuur.',
    'resume.tab3_title':'Erasmus+ Leiderschapstraining - Hongarije',
    'resume.tab3_p1':'Deelname aan de "Joyful Leadership 7.0"-training in Somogyvamos, Hongarije (december 2024). Simulaties, workshops en interactieve spellen om essentiële leiderschapsvaardigheden te ontwikkelen.',
    'resume.tab3_p2':'Tools en kennis verworven voor het begeleiden van anderen om effectieve leiders te worden. Versterkte interculturele samenwerking en professionele ontwikkeling.',
    'resume.tab4_title':'Paramedische Studies - Haute École Léonard De Vinci',
    'resume.tab4_p1':'Paramedische opleiding gevolgd aan de Haute École Léonard De Vinci, een van de toonaangevende instellingen van Brussel. Sterk analytisch denken en werkvermogen onder druk ontwikkeld.',
    'resume.tab4_p2':'De gezondheidszorgachtergrond biedt een uniek perspectief in IT-werk: begrip voor gebruikersbehoeften, documentatienormen en systematische probleemoplossing.',
    'skills.heading':'Technische & Soft Skills', 't.skills': "Technische Vaardigheden",'tech.support':"Technische Ondersteuning",'net.config':"Netwerkconfiguratie",
    'skills.p':'Een uitgebreide set vaardigheden die technische expertise combineert met projectbeheer en leiderschapskwaliteiten opgedaan door diverse professionele ervaringen.',
    'portfolio.heading':'Uitgelichte Projecten & Opleidingen','portfolio.p':'Een overzicht van professionele ontwikkeling en internationale samenwerkingservaringen die toewijding aan continu leren en leiderschap aantonen.',
    'portfolio.erasmus_label':'Erasmus+ Leiderschapstraining','portfolio.web_title':'Webontwikkeling','portfolio.mgmt_title':'Teammanagement','portfolio.available':'Momenteel beschikbaar',
    'test.heading':"Wat collega's zeggen over werken met mij.",
    'test.t1_p':'De technische expertise en probleemoplossende capaciteiten van Christian maakten hem een onschatbare aanwinst voor ons IT-team. Zijn toewijding aan soepele operaties en positieve gebruikerservaringen overtrof consequent de verwachtingen.',
    'test.t1_author':'Collega (Leefmilieu Brussel)','test.t1_note':'*Humoristisch geïllustreerd door Dwight Schrute (Rainn Wilson in The Office)*',
    'test.t2_p':'Samenwerken met Christian bij Greenpeace was inspirerend. Zijn communicatievaardigheden en vermogen om contact te maken met mensen, gecombineerd met strategisch denken, hadden een echte impact op onze fondsenwervingscampagnes.',
    'test.t2_author':'Teamlid (Greenpeace België)','test.t2_note':'*Geestig geïllustreerd door klimaatactivist Greta Thunberg*',
    'about_page.hello':'Hallo,', 'my.story':"Mijn Verhaal",
    'about_page.h2':"Ik heet Christian Bokoto",
    'about_page.p1':'Een zeer gemotiveerde professional gevestigd in Brussel, België, met een passie voor technologie en continu leren. Mijn traject strekt zich uit van paramedische studies tot IT-technicus, webontwikkelaar en projectmanager.',
    'about_page.p2':'Geboren op 30 december 1996, breng ik een uniek perspectief op technologie vanuit mijn diverse achtergrond. Mijn ervaring omvat technische ondersteuning bij Leefmilieu Brussel, campagnebeheer bij Greenpeace België en Erasmus+ leiderschapstraining.',
    'about_page.values_heading':'De principes die mij leiden','about_page.values_p':'De fundamentele waarden die mijn benadering van werk, relaties en het leven vormgeven.',
    'about_page.austerity':'Soberheid','about_page.austerity_p':'Eenvoud en discipline omarmen in het persoonlijke en professionele leven. Focussen op wat echt belangrijk is door het overbodige te elimineren. Dit principe leidt efficiënt resourcebeheer en doordachte besluitvorming.',
    'about_page.sincerity':'Oprechtheid','about_page.sincerity_p':"Zich verbinden aan authenticiteit en eerlijkheid in alle interacties. Vertrouwen opbouwen door transparante communicatie en oprechte betrokkenheid. Deze waarde waarborgt integriteit in relaties met klanten, collega's of gemeenschappen.",
    'about_page.cleanliness':'Netheid','about_page.cleanliness_p':'Orde, helderheid en precisie handhaven in werk en omgeving: schone code, duidelijke documentatie en georganiseerde projectstructuren. Uitmuntendheid ontstaat uit aandacht voor detail.',
    'about_page.compassion':'Medeleven','about_page.compassion_p':"Leiden met empathie en begrip voor anderen. Het menselijke element in elk project erkennen. Deze waarde stimuleert gebruikersgerichte ontwerpen en oplossingen die echt dienend zijn aan mensen's behoeften.",
    'about_page.accountability':'Verantwoordelijkheid','about_page.accountability_p':'Volledige verantwoordelijkheid nemen voor toezeggingen, acties en resultaten. Deadlines halen, kwaliteitsnormen handhaven en beloften nakomen.',
    'about_page.resilience':'Veerkracht','about_page.resilience_p':'Volharden door uitdagingen heen met aanpassingsvermogen en vastberadenheid. Leren van tegenslagen en voorwaartse dynamiek behouden. Deze kracht maakt continue groei en succes mogelijk.',
    'about_page.whyme_heading':'Wat mij onderscheidt?','about_page.whyme_p':'Een unieke combinatie van technische expertise, communicatievaardigheden en internationaal perspectief, opgedaan door diverse professionele ervaringen en Erasmus+-training.',
    'about_page.whyme_li1':'Meertalige professional: vloeiend in Frans (moedertaal), Engels (C2) en Nederlands (B1), wat effectieve communicatie mogelijk maakt in Europese markten en internationale teams.',
    'about_page.whyme_li2':'Bewezen staat van dienst in zowel technische omgevingen als mensgerichte rollen, van IT-infrastructuur bij Leefmilieu Brussel tot gemeenschapsbetrokkenheid bij Greenpeace België.',
    'about_page.whyme_li3':'Toegewijd aan continu leren en leiderschapsontwikkeling, aangetoond door deelname aan het Erasmus+ Joyful Leadership-programma in Hongarije.',
    'about_page.insp_heading':'Persoonlijkheden die mij inspireerden',
    'about_page.quote1':"Bescheidenheid betekent niet dat je jezelf minderwaardig acht, maar dat je minder aan jezelf denkt. Behandel iedereen die je tegenkomt alsof het succes van je leven afhangt van de kwaliteit van je interacties met hen.",
    'about_page.quote2':"Het leven van een persoon heeft waarde zolang hij of zij waarde toekent aan het leven van anderen door middel van liefde, vriendschap, verontwaardiging en mededogen.",
    'about_page.spiritual_role':'Spiritueel Activist','about_page.beauvoir_role':'Auteur, Feministische Activist',
    'services_page.banner_h1':'Mijn Diensten','services_page.breadcrumb':'Diensten','services_page.main_heading':'Uitmuntendheid in Projectbeheer',
    'services_page.main_p1':'Met een unieke combinatie van technische expertise, strategisch denken en mensgericht leiderschap breng ik een holistische benadering van projectbeheer. Mijn ervaring omvat IT-infrastructuur bij Leefmilieu Brussel, gemeenschapsbetrokkenheid bij Greenpeace België en internationale leiderschapsontwikkeling via Erasmus+.',
    'services_page.main_p2':'Ik blink uit in strategische planning, risicobeheer en communicatie met stakeholders. Elk project wordt benaderd met nauwkeurige documentatie, duidelijke mijlpalen en adaptieve probleemoplossing.',
    'services_page.main_p3':"Opgeleid in Joyful Leadership-methodologieën tijdens het Erasmus+-programma in Hongarije (december 2024), breng ik bewezen technieken in communicatie, strategisch denken en teammentorschap. Ik beheer niet alleen taken, ik bevorder kernwaarden en creëer omgevingen waar teams uitblinken.",
    'services_page.approach_h':'Mijn aanpak','services_page.approach_p1':"Elk project begint met diepgaande stakeholdersbetrokkenheid en duidelijke doeldefinitie. Vanuit mijn diverse achtergrond stel ik uitgebreide documentatie op, identificeer ik vroeg risico's en creëer ik adaptieve strategieën.",
    'services_page.approach_p2':"Ik gebruik systeemdenken om te begrijpen hoe verschillende projectcomponenten met elkaar interageren. Communicatie blijft centraal: transparante voortgangsupdates en duidelijkheid over ieders rol.",
    'services_page.comp_h':'Kerncompetenties','services_page.comp_p1':'Mijn technische basis van IT-infrastructuurwerk bij Leefmilieu Brussel biedt diep inzicht in systeemarchitectuur en technische risicofactoren, wat realistische projectplanning en coördinatie garandeert.',
    'services_page.comp_p2':"Ervaring in campagneplanning bij Greenpeace heeft mijn vaardigheden in overtuiging en teammotivatie verfijnd. Gecombineerd met Joyful Leadership-training breng ik geavanceerde tools voor conflictoplossing en effectieve delegatie.",
    'services_page.skills_heading':'Vaardigheden die succes aandrijven','services_page.skills_p':'Een uitgebreide vaardighedenset ontwikkeld door diverse professionele ervaringen en gespecialiseerde leiderschapstraining.',
    'services_page.web_title':'Webontwikkeling','services_page.web_p':'Full-stack webontwikkeling met HTML5, CSS3 en JavaScript. Responsieve applicaties maken met moderne frameworks. Ervaring in front-end design, back-end logica, database-integratie en implementatie.',
    'services_page.it_title':'IT Technische Ondersteuning','services_page.it_p':'Uitgebreide technische probleemoplossing voor hardware- en softwaresystemen. Netwerkconfiguratie, systeemonderhoud en IT-activabeheer. Ervaring met installatie, externe ondersteuning en inventarisbeheer.',
    'services_page.pm_title':'Projectbeheer','services_page.pm_p':'Strategische planning, risicobeheer en uitgebreide projectdocumentatie. Ervaring in het coördineren van technische teams, fondsenwervingscampagnes en internationale samenwerkingen.',
    'services_page.lead_title':'Leiderschap','services_page.lead_p':'Opgeleid in Joyful Leadership-methodologieën via Erasmus+. Vaardigheden: teammentorschap, kernwaarden bevorderen, leiderschapsstijlen begrijpen, conflictoplossing en hoogpresterende teamculturen creëren.',
    'services_page.comm_title':'Effectieve Communicatie','services_page.comm_p':'Meertalige professional vloeiend in Frans (moedertaal), Engels (C2) en Nederlands (B1). Bekwaam in stakeholdersbetrokkenheid, overtuigende presentatie en interculturele communicatie.',
    'services_page.sys_title':'Systeemdenken','services_page.sys_p':'Holistische probleembenadering die rekening houdt met onderlinge afhankelijkheden en langetermijngevolgen. Inzicht in de wisselwerking tussen technische, menselijke en organisatorische elementen.',
    'contact_page.banner_h1':'Contacteer mij','contact_page.breadcrumb':'Contact','contact_page.map_heading':'Vind mij hier',
  }
};

/* ── Core engine ── */
(function () {
  var STORAGE_KEY = 'cb_lang';
  var SUPPORTED   = ['en', 'fr', 'nl'];

  function getSavedLang() {
    try { return localStorage.getItem(STORAGE_KEY) || 'en'; } catch(e) { return 'en'; }
  }
  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
  }
  function t(lang, key) {
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS['en'][key] || key;
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      el.textContent = t(lang, el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      el.innerHTML = t(lang, el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      el.placeholder = t(lang, el.getAttribute('data-i18n-placeholder'));
    });
    document.documentElement.lang = lang === 'nl' ? 'nl' : lang === 'fr' ? 'fr' : 'en';
    document.querySelectorAll('.lang-current').forEach(function(el) {
      el.textContent = lang.toUpperCase();
    });
    document.querySelectorAll('.lang-option').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function buildSwitcherCSS() {
    var style = document.createElement('style');
    style.textContent = [
      '.lang-switcher{position:absolute;right:3%;top:50%;transform:translateY(-50%);z-index:200}',
      '.lang-toggle{display:flex;align-items:center;gap:5px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);border-radius:20px;padding:5px 13px 5px 10px;cursor:pointer;color:#ccc;font-family:"Karla",sans-serif;font-size:13px;font-weight:600;letter-spacing:.04em;transition:all .3s ease}',
      '.lang-toggle:hover{background:rgba(255,204,51,.12);border-color:rgba(255,204,51,.4);color:#fff}',
      '.lang-globe{font-size:14px;line-height:1}',
      '.lang-current{color:#ffcc33;font-weight:700;min-width:20px;display:inline-block;text-align:center}',
      '.lang-arrow{font-size:9px;color:#999;transition:transform .3s ease}',
      '.lang-switcher.open .lang-arrow{transform:rotate(180deg)}',
      '.lang-dropdown{position:absolute;top:calc(100% + 8px);right:0;background:#2E2D33;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;min-width:130px;opacity:0;pointer-events:none;transform:translateY(-6px);transition:opacity .2s ease,transform .2s ease;box-shadow:0 8px 24px rgba(0,0,0,.4)}',
      '.lang-switcher.open .lang-dropdown{opacity:1;pointer-events:auto;transform:translateY(0)}',
      '.lang-option{display:block;width:100%;padding:9px 16px;background:transparent;color:#999;text-align:left;font-family:"Karla",sans-serif;font-size:13px;cursor:pointer;transition:color .2s,background .2s;border-bottom:1px solid rgba(255,255,255,.05)}',
      '.lang-option:last-child{border-bottom:none}',
      '.lang-option:hover{background:rgba(255,204,51,.08);color:#fff}',
      '.lang-option.active{color:#ffcc33;font-weight:700;background:rgba(255,204,51,.05)}',
      '.lang-option.active::before{content:"✓ ";font-size:11px}',
      '@media only screen and (max-width:991px){.lang-switcher{right:52px;top:11px;transform:none}.lang-toggle{padding:4px 10px 4px 8px;font-size:12px;border-radius:16px}.lang-globe{font-size:13px}.lang-dropdown{right:0;min-width:120px}}'
    ].join('');
    document.head.appendChild(style);
  }

  function buildSwitcherHTML() {
    document.querySelectorAll('.header-inner').forEach(function(header) {
      if (header.querySelector('.lang-switcher')) return;
      var lang = getSavedLang();
      var div = document.createElement('div');
      div.className = 'lang-switcher';
      div.innerHTML = '<button class="lang-toggle" aria-label="Switch language" aria-expanded="false">'
        + '<span class="lang-globe">&#127760;</span>'
        + '<span class="lang-current">' + lang.toUpperCase() + '</span>'
        + '<i class="fas fa-chevron-down lang-arrow"></i>'
        + '</button>'
        + '<div class="lang-dropdown" role="listbox">'
        + '<button class="lang-option' + (lang==='en'?' active':'') + '" data-lang="en" role="option">English</button>'
        + '<button class="lang-option' + (lang==='fr'?' active':'') + '" data-lang="fr" role="option">Fran\u00e7ais</button>'
        + '<button class="lang-option' + (lang==='nl'?' active':'') + '" data-lang="nl" role="option">Nederlands</button>'
        + '</div>';
      header.appendChild(div);
    });
  }

  function bindEvents() {
    document.addEventListener('click', function(e) {
      var option  = e.target.closest('.lang-option');
      var toggle  = e.target.closest('.lang-toggle');
      var switcher = e.target.closest('.lang-switcher');

      if (option) {
        var lang = option.getAttribute('data-lang');
        saveLang(lang);
        applyLang(lang);
        document.querySelectorAll('.lang-switcher').forEach(function(s){ s.classList.remove('open'); });
        document.querySelectorAll('.lang-toggle').forEach(function(t){ t.setAttribute('aria-expanded','false'); });
        return;
      }
      if (toggle) {
        var sw = toggle.closest('.lang-switcher');
        var isOpen = sw.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        return;
      }
      if (!switcher) {
        document.querySelectorAll('.lang-switcher').forEach(function(s){ s.classList.remove('open'); });
        document.querySelectorAll('.lang-toggle').forEach(function(t){ t.setAttribute('aria-expanded','false'); });
      }
    });
  }

  function init() {
    buildSwitcherCSS();
    buildSwitcherHTML();
    bindEvents();
    applyLang(getSavedLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
