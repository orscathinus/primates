/* Shared educational data for Branching Origins.
   Dates are approximate. "Ma" means millions of years ago. */
window.PRIMATE_DATA = {
  groupLabels: {
    early: "Early primate relatives",
    strepsirrhine: "Strepsirrhines",
    haplorhine: "Early haplorhines",
    anthropoid: "Anthropoids",
    ape: "Apes",
    hominin: "Hominins"
  },

  taxa: [
    {
      id: "purgatorius", common: "Purgatorius", scientific: "Purgatorius spp.",
      group: "early", era: "paleocene", age: "~66–63 Ma", ageStart: 66, region: "North America",
      status: "Extinct", certainty: "Relationship debated",
      summary: "A tiny, shrew-sized mammal close to the base of the primate story, known mostly from teeth and ankle bones.",
      significance: "Its fossils appear very near the Cretaceous–Paleogene boundary. Ankle anatomy suggests arboreal abilities, but whether plesiadapiforms belong inside Primates or just outside crown primates remains debated.",
      traits: ["Small body", "Arboreal ankle adaptations", "Generalized teeth", "Near the primate root"],
      habitat: "Wooded Paleocene environments", diet: "Likely insects and plant foods",
      notAncestor: "Best treated as a close early relative, not a demonstrated ancestor of all later primates.", featured: true
    },
    {
      id: "plesiadapis", common: "Plesiadapis", scientific: "Plesiadapis spp.",
      group: "early", era: "paleocene", age: "~58–55 Ma", ageStart: 58, region: "North America and Europe",
      status: "Extinct", certainty: "Placement debated",
      summary: "A larger plesiadapiform with rodent-like incisors, claws on many digits, and a long snout.",
      significance: "Plesiadapis illustrates that early primate relatives did not yet possess the full suite of features seen in Eocene crown primates.",
      traits: ["Elongated snout", "Large incisors", "Mostly clawed digits", "Arboreal adaptations"],
      habitat: "Temperate to subtropical forests", diet: "Fruit, leaves, and other plant material",
      notAncestor: "Its unusual specializations make it unlikely to represent a simple direct ancestor of later primates."
    },
    {
      id: "carpolestes", common: "Carpolestes", scientific: "Carpolestes simpsoni",
      group: "early", era: "paleocene", age: "~56 Ma", ageStart: 56, region: "North America",
      status: "Extinct", certainty: "Close relative of crown primates",
      summary: "A small tree-dweller with a grasping big toe and a nail on that digit, but eyes that were not strongly forward-facing.",
      significance: "Its mosaic anatomy supports the idea that grasping evolved before the highly convergent vision of later primates.",
      traits: ["Divergent big toe", "Nail on the hallux", "Grasping foot", "Less convergent eyes"],
      habitat: "Arboreal forest", diet: "Likely fruit and insects",
      notAncestor: "A useful model for trait order, but not proven to lie on the direct line to crown primates.", featured: true
    },
    {
      id: "teilhardina", common: "Teilhardina", scientific: "Teilhardina spp.",
      group: "haplorhine", era: "eocene", age: "~56–55 Ma", ageStart: 56, region: "Asia, Europe, and North America",
      status: "Extinct", certainty: "Early haplorhine-grade primate",
      summary: "One of the earliest widely distributed euprimates, appearing during the intensely warm opening of the Eocene.",
      significance: "Its rapid intercontinental appearance helps researchers study how climate and northern land connections shaped early primate dispersal.",
      traits: ["Tiny body", "Leaping adaptations", "Forward-oriented eyes", "Early Eocene dispersal"],
      habitat: "Warm, humid forests", diet: "Primarily insects and fruit",
      notAncestor: "Usually placed among omomyiform haplorhines; exact links to tarsiers or anthropoids are uncertain."
    },
    {
      id: "notharctus", common: "Notharctus", scientific: "Notharctus spp.",
      group: "strepsirrhine", era: "eocene", age: "~50–45 Ma", ageStart: 50, region: "North America",
      status: "Extinct", certainty: "Adapiform; relation to living strepsirrhines debated",
      summary: "A lemur-like adapiform with a flexible back, grasping limbs, and a long tail.",
      significance: "Notharctus provides unusually complete evidence for Eocene primate locomotion, while reminding us that superficial resemblance does not prove direct ancestry.",
      traits: ["Grasping hands and feet", "Long tail", "Arboreal quadrupedalism", "Relatively long snout"],
      habitat: "Dense Eocene forest", diet: "Fruit and leaves",
      notAncestor: "Often described as lemur-like, but adapiform relationships to living strepsirrhines remain contested."
    },
    {
      id: "darwinius", common: "Darwinius", scientific: "Darwinius masillae",
      group: "strepsirrhine", era: "eocene", age: "~47 Ma", ageStart: 47, region: "Europe",
      status: "Extinct", certainty: "Adapiform placement secure; broader significance debated",
      summary: "A remarkably complete juvenile adapiform skeleton from Germany’s Messel deposits.",
      significance: "The fossil preserves soft-body outlines and stomach contents, but early claims that it was a special human ancestor were not supported by later phylogenetic work.",
      traits: ["Nearly complete skeleton", "Grasping digits", "Long tail", "No toothcomb"],
      habitat: "Subtropical lake-margin forest", diet: "Leaves and fruit",
      notAncestor: "An adapiform side branch, not a missing link leading directly to humans."
    },
    {
      id: "archicebus", common: "Archicebus", scientific: "Archicebus achilles",
      group: "haplorhine", era: "eocene", age: "~55 Ma", ageStart: 55, region: "China",
      status: "Extinct", certainty: "Early haplorhine",
      summary: "A tiny, nearly complete early Eocene primate combining tarsier-like and anthropoid-like features.",
      significance: "Its skeleton helps constrain the early split between tarsier and anthropoid lineages and demonstrates that early haplorhines were very small.",
      traits: ["Very small body", "Long hind limbs", "Grasping feet", "Mosaic ankle anatomy"],
      habitat: "Warm Eocene forest", diet: "Likely insects",
      notAncestor: "Close to early haplorhine diversification, but not established as a direct ancestor of tarsiers or anthropoids.", featured: true
    },
    {
      id: "eosimias", common: "Eosimias", scientific: "Eosimias spp.",
      group: "anthropoid", era: "eocene", age: "~45–40 Ma", ageStart: 45, region: "China",
      status: "Extinct", certainty: "Probable stem anthropoid",
      summary: "A tiny Asian primate known mainly from jaws, teeth, and ankle material.",
      significance: "Eosimias helped strengthen evidence that key stages of early anthropoid evolution occurred in Asia before later diversification in Africa.",
      traits: ["Tiny body", "Anthropoid-like teeth", "Agile arboreal movement", "Asian distribution"],
      habitat: "Tropical to subtropical forest", diet: "Fruit and insects",
      notAncestor: "Usually interpreted as a stem anthropoid, not necessarily the ancestor of all monkeys and apes."
    },
    {
      id: "apidium", common: "Apidium", scientific: "Apidium spp.",
      group: "anthropoid", era: "oligocene", age: "~30–28 Ma", ageStart: 30, region: "Egypt",
      status: "Extinct", certainty: "Stem anthropoid",
      summary: "A small, active Fayum primate with monkey-like jaws and adaptations for running and leaping on branches.",
      significance: "Apidium represents the rich early anthropoid radiation of Afro-Arabia but falls outside the crowns of New World monkeys and catarrhines.",
      traits: ["Dental formula unlike catarrhines", "Arboreal leaping", "Small-bodied", "Sexual dimorphism possible"],
      habitat: "Wooded Fayum environments", diet: "Fruit and seeds",
      notAncestor: "A stem anthropoid branch rather than a confirmed direct ancestor."
    },
    {
      id: "aegyptopithecus", common: "Aegyptopithecus", scientific: "Aegyptopithecus zeuxis",
      group: "anthropoid", era: "oligocene", age: "~30 Ma", ageStart: 30, region: "Egypt",
      status: "Extinct", certainty: "Stem catarrhine",
      summary: "A robust, fruit-eating primate near the stem of the Old World monkey–ape branch.",
      significance: "Its skull, teeth, and skeleton preserve a useful combination of ancestral anthropoid features before the full monkey–ape split.",
      traits: ["Catarrhine dental formula", "Small brain relative to body", "Long tail", "Arboreal quadrupedalism"],
      habitat: "Subtropical woodland", diet: "Primarily fruit",
      notAncestor: "Close to the catarrhine stem, but not securely identified as the direct ancestor of later catarrhines.", featured: true
    },
    {
      id: "branisella", common: "Branisella", scientific: "Branisella boliviana",
      group: "anthropoid", era: "oligocene", age: "~26 Ma", ageStart: 26, region: "Bolivia",
      status: "Extinct", certainty: "Early South American anthropoid",
      summary: "One of the oldest long-known fossil primates from South America, represented mainly by teeth and jaw fragments.",
      significance: "It documents that anthropoids had reached South America by the late Oligocene, probably after an extraordinary trans-Atlantic dispersal from Africa.",
      traits: ["New World monkey affinities", "Dental evidence", "South American radiation", "Long-distance dispersal context"],
      habitat: "Tropical South American environments", diet: "Probably fruit and mixed plant foods",
      notAncestor: "Its exact relationship to living New World monkey groups is unresolved."
    },
    {
      id: "proconsul", common: "Proconsul", scientific: "Ekembo / Proconsul-grade apes",
      group: "ape", era: "miocene", age: "~20–17 Ma", ageStart: 20, region: "East Africa",
      status: "Extinct", certainty: "Early stem hominoid",
      summary: "An early tailless ape with a monkey-like trunk and mainly above-branch quadrupedal locomotion.",
      significance: "Proconsul-grade fossils show that tail loss preceded the suspensory body plans of living apes.",
      traits: ["No external tail", "Flexible grasping limbs", "Monkey-like trunk", "Relatively slow development"],
      habitat: "Woodland and forest", diet: "Mostly fruit",
      notAncestor: "An early ape branch and useful model, but not demonstrably the last common ancestor of living apes.", featured: true
    },
    {
      id: "morotopithecus", common: "Morotopithecus", scientific: "Morotopithecus bishopi",
      group: "ape", era: "miocene", age: "~20.6 Ma", ageStart: 20.6, region: "Uganda",
      status: "Extinct", certainty: "Position among early apes debated",
      summary: "An early Miocene ape whose vertebrae have been interpreted as evidence for a more upright trunk.",
      significance: "It is central to debates over when orthograde posture—an upright trunk used in climbing and suspension—first appeared in ape evolution.",
      traits: ["Possible upright trunk", "Ape-like vertebrae", "Large-bodied", "Fragmentary skeleton"],
      habitat: "Wooded East African habitats", diet: "Fruit and leaves",
      notAncestor: "Its anatomy is important, but both its placement and interpretation remain disputed."
    },
    {
      id: "pierolapithecus", common: "Pierolapithecus", scientific: "Pierolapithecus catalaunicus",
      group: "ape", era: "miocene", age: "~12 Ma", ageStart: 12, region: "Spain",
      status: "Extinct", certainty: "Great-ape relative; exact placement debated",
      summary: "A middle Miocene ape with a broad, shallow chest and traits associated with upright climbing.",
      significance: "Pierolapithecus helps test reconstructions of the body form near the origin of great apes, though it is not a complete stand-in for their common ancestor.",
      traits: ["Broad thorax", "Short lower back", "Orthograde climbing", "Powerful grasping"],
      habitat: "Warm Eurasian woodland", diet: "Fruit",
      notAncestor: "Likely close to great-ape diversification, but its exact branch remains debated."
    },
    {
      id: "sivapithecus", common: "Sivapithecus", scientific: "Sivapithecus spp.",
      group: "ape", era: "miocene", age: "~12.5–8.5 Ma", ageStart: 12.5, region: "South Asia",
      status: "Extinct", certainty: "Orangutan-line relative",
      summary: "A Miocene ape whose face shares distinctive similarities with living orangutans.",
      significance: "Its facial anatomy strongly links it to the orangutan branch, while its postcranial skeleton retained a different locomotor pattern from modern orangutans.",
      traits: ["Orangutan-like face", "Thick dental enamel", "Arboreal quadrupedal traits", "South Asian range"],
      habitat: "Seasonal woodland and forest", diet: "Fruit and tough plant foods",
      notAncestor: "A close orangutan-line relative; specific ancestor–descendant relationships are uncertain."
    },
    {
      id: "oreopithecus", common: "Oreopithecus", scientific: "Oreopithecus bambolii",
      group: "ape", era: "miocene", age: "~8–7 Ma", ageStart: 8, region: "Italy",
      status: "Extinct", certainty: "Isolated ape side branch",
      summary: "An unusual island ape with a distinctive pelvis, spine, teeth, and highly debated locomotion.",
      significance: "Oreopithecus shows how isolation can produce anatomy that mimics traits from other lineages without implying close relationship.",
      traits: ["Island evolution", "Unusual pelvis", "Reduced canines", "Controversial posture"],
      habitat: "Island swamp forest", diet: "Leaves and soft plant foods",
      notAncestor: "A specialized side branch with no accepted direct role in human ancestry."
    },
    {
      id: "sahelanthropus", common: "Sahelanthropus", scientific: "Sahelanthropus tchadensis",
      group: "hominin", era: "miocene", age: "~7 Ma", ageStart: 7, region: "Chad",
      status: "Extinct", certainty: "Possible early hominin; debated",
      summary: "A very early ape from near the estimated human–chimpanzee divergence, known from a cranium and fragmentary postcranial remains.",
      significance: "Its small canine teeth and head posture have been interpreted as hominin-like; evidence for bipedalism and its exact placement remain active topics of debate.",
      traits: ["Small canines", "Ape-sized brain", "Possible bipedal signals", "Central African location"],
      habitat: "Wooded and lakeside mosaic", diet: "Mixed plant foods",
      notAncestor: "A possible early hominin, not securely established as a direct human ancestor."
    },
    {
      id: "orrorin", common: "Orrorin", scientific: "Orrorin tugenensis",
      group: "hominin", era: "miocene", age: "~6 Ma", ageStart: 6, region: "Kenya",
      status: "Extinct", certainty: "Probable early hominin",
      summary: "An early hominin known from teeth, arm bones, and femoral fragments that suggest a combination of climbing and bipedal movement.",
      significance: "Its thigh-bone anatomy provides some of the earliest postcranial evidence associated with habitual bipedalism.",
      traits: ["Bipedal femoral signals", "Climbing-capable arms", "Thick molar enamel", "Small body"],
      habitat: "Wooded habitat", diet: "Fruit and other plant foods",
      notAncestor: "Likely near the hominin stem; direct ancestry is unproven."
    },
    {
      id: "ardipithecus", common: "Ardipithecus", scientific: "Ardipithecus ramidus",
      group: "hominin", era: "pliocene", age: "~4.4 Ma", ageStart: 4.4, region: "Ethiopia",
      status: "Extinct", certainty: "Early hominin",
      summary: "A woodland hominin with a grasping big toe, reduced canine dimorphism, and a pelvis showing a complex mix of climbing and bipedal traits.",
      significance: "Ardipithecus undermines the idea that the human–chimp common ancestor must have looked and moved exactly like a modern chimpanzee.",
      traits: ["Grasping big toe", "Mosaic pelvis", "Reduced canine dimorphism", "Woodland setting"],
      habitat: "Woodland", diet: "Omnivorous plant-rich diet",
      notAncestor: "Close to early hominin diversification, but exact ancestry to later hominins is debated.", featured: true
    },
    {
      id: "australopithecus-afarensis", common: "Australopithecus afarensis", scientific: "Australopithecus afarensis",
      group: "hominin", era: "pliocene", age: "~3.85–2.95 Ma", ageStart: 3.85, region: "East Africa",
      status: "Extinct", certainty: "Well-supported hominin",
      summary: "A small-brained, habitually bipedal hominin that retained long arms and climbing-related upper-body traits.",
      significance: "A. afarensis is represented by many individuals, including the partial skeleton ‘Lucy’ and evidence of bipedal footprints at Laetoli.",
      traits: ["Habitual bipedalism", "Long arms", "Small brain", "Projecting face"],
      habitat: "Woodland–grassland mosaic", diet: "Flexible plant-based diet",
      notAncestor: "Often considered close to the ancestry of later hominins, though the exact branching pattern remains debated."
    },
    {
      id: "paranthropus-boisei", common: "Paranthropus boisei", scientific: "Paranthropus boisei",
      group: "hominin", era: "quaternary", age: "~2.3–1.2 Ma", ageStart: 2.3, region: "East Africa",
      status: "Extinct", certainty: "Robust australopith side branch",
      summary: "A specialized hominin with huge cheek teeth, powerful chewing muscles, and a crest on many adult skulls.",
      significance: "Its anatomy demonstrates that early human evolution included strongly specialized branches rather than a single progressive sequence.",
      traits: ["Massive molars", "Sagittal crest", "Wide cheekbones", "Bipedal body"],
      habitat: "Varied woodland and grassland mosaics", diet: "Tough and fallback plant foods",
      notAncestor: "Widely regarded as a specialized side branch, not an ancestor of Homo."
    },
    {
      id: "homo-habilis", common: "Homo habilis", scientific: "Homo habilis",
      group: "hominin", era: "quaternary", age: "~2.4–1.4 Ma", ageStart: 2.4, region: "Africa",
      status: "Extinct", certainty: "Species boundaries debated",
      summary: "An early Homo taxon with a somewhat larger brain and smaller face and teeth than australopiths.",
      significance: "H. habilis is often associated with early stone tools, though several hominin species may have made and used tools during this period.",
      traits: ["Larger brain than australopiths", "Reduced face", "Dexterous hands", "Primitive body proportions"],
      habitat: "Mixed African environments", diet: "Broad omnivorous diet",
      notAncestor: "May include more than one species; its exact relationship to later Homo is debated."
    },
    {
      id: "homo-erectus", common: "Homo erectus", scientific: "Homo erectus",
      group: "hominin", era: "quaternary", age: "~1.9 Ma–110 ka", ageStart: 1.9, region: "Africa and Eurasia",
      status: "Extinct", certainty: "Well-supported, highly variable species",
      summary: "A long-lived human species with modern-like body proportions and the first major expansion of Homo beyond Africa.",
      significance: "H. erectus combined long legs, efficient terrestrial travel, larger brains than earlier hominins, and long-distance geographic dispersal.",
      traits: ["Long legs", "Shorter arms", "Thick cranial bones", "Long-range dispersal"],
      habitat: "Highly varied open and wooded habitats", diet: "Flexible omnivory",
      notAncestor: "Some populations likely contributed to later Homo, but its variation and regional history are complex.", featured: true
    },
    {
      id: "homo-neanderthalensis", common: "Neanderthals", scientific: "Homo neanderthalensis",
      group: "hominin", era: "quaternary", age: "~400–40 ka", ageStart: 0.4, region: "Europe and western Asia",
      status: "Extinct", certainty: "Well-supported human lineage",
      summary: "A cold-adapted human lineage with large brains, robust skeletons, sophisticated technology, and repeated contact with Homo sapiens.",
      significance: "Ancient DNA shows that Neanderthals and modern humans interbred, leaving ancestry in many living people outside Africa.",
      traits: ["Robust build", "Large nasal region", "Complex tools", "Genetic exchange with H. sapiens"],
      habitat: "Glacial and interglacial Eurasia", diet: "Highly flexible omnivory",
      notAncestor: "A close sister lineage that contributed some genes to modern populations, not a simple stage before Homo sapiens."
    },
    {
      id: "homo-sapiens", common: "Modern humans", scientific: "Homo sapiens",
      group: "hominin", era: "living", age: "~300 ka–present", ageStart: 0.3, region: "Origin in Africa; now worldwide",
      status: "Living", certainty: "Living species",
      summary: "The only surviving human species, marked by extraordinary cultural accumulation, ecological breadth, and global dispersal.",
      significance: "Homo sapiens emerged within a diverse African population history, later dispersing and exchanging genes with other human lineages.",
      traits: ["Globular braincase", "Small face and teeth", "Cumulative culture", "Global distribution"],
      habitat: "Nearly every terrestrial biome", diet: "Highly flexible and culturally mediated",
      notAncestor: "A living terminal branch of the tree—not the goal toward which evolution was directed."
    },
    {
      id: "lemurs", common: "Lemurs", scientific: "Lemuriformes",
      group: "strepsirrhine", era: "living", age: "Living radiation", ageStart: 0, region: "Madagascar",
      status: "Living", certainty: "Living clade",
      summary: "A diverse Malagasy radiation ranging from tiny mouse lemurs to large indriids.",
      significance: "Lemurs evolved in long isolation after their ancestors reached Madagascar, producing exceptional ecological and behavioral diversity.",
      traits: ["Toothcomb in most species", "Grooming claw", "Strong scent communication", "Diverse activity patterns"],
      habitat: "Rainforest, dry forest, scrub, and highlands", diet: "Fruit, leaves, insects, and mixed diets",
      notAncestor: "Modern lemurs are cousins, not models frozen at an ancestral stage."
    },
    {
      id: "tarsiers", common: "Tarsiers", scientific: "Tarsiiformes",
      group: "haplorhine", era: "living", age: "Living radiation", ageStart: 0, region: "Southeast Asia",
      status: "Living", certainty: "Living clade",
      summary: "Small nocturnal haplorhines with enormous eyes, elongated ankle bones, and powerful vertical clinging and leaping.",
      significance: "Tarsiers are the living sister group to anthropoids, making them crucial for reconstructing early haplorhine evolution.",
      traits: ["Huge fixed eyes", "Elongated tarsals", "Vertical clinging and leaping", "Entirely animal prey"],
      habitat: "Tropical forest", diet: "Insects and small vertebrates",
      notAncestor: "Living tarsiers are specialized cousins of anthropoids, not unchanged ancestors."
    },
    {
      id: "new-world-monkeys", common: "New World monkeys", scientific: "Platyrrhini",
      group: "anthropoid", era: "living", age: "Living radiation", ageStart: 0, region: "Central and South America",
      status: "Living", certainty: "Living clade",
      summary: "A diverse radiation including marmosets, capuchins, howler monkeys, sakis, and spider monkeys.",
      significance: "Their ancestors reached South America from Africa, then diversified into many sizes, diets, social systems, and locomotor styles.",
      traits: ["Broadly spaced nostrils", "Mostly arboreal", "Prehensile tails in some", "Wide social diversity"],
      habitat: "Tropical forest to seasonal woodland", diet: "Fruit, leaves, gums, insects, and mixed diets",
      notAncestor: "A sister radiation to catarrhines, not an earlier stage on the way to apes."
    },
    {
      id: "old-world-monkeys", common: "Old World monkeys", scientific: "Cercopithecoidea",
      group: "anthropoid", era: "living", age: "Living radiation", ageStart: 0, region: "Africa and Asia",
      status: "Living", certainty: "Living clade",
      summary: "The largest living primate radiation, including macaques, baboons, guenons, colobus monkeys, and langurs.",
      significance: "Their bilophodont molars, varied digestive systems, and ecological flexibility helped them thrive across forests, savannas, mountains, and cities.",
      traits: ["Downward-facing nostrils", "Bilophodont molars", "Tails never prehensile", "Broad ecological range"],
      habitat: "Forest, grassland, mountain, desert edge, and urban areas", diet: "Highly varied",
      notAncestor: "Old World monkeys and apes share an ancestor; living monkeys did not turn into apes."
    },
    {
      id: "gibbons", common: "Gibbons", scientific: "Hylobatidae",
      group: "ape", era: "living", age: "Living radiation", ageStart: 0, region: "South and Southeast Asia",
      status: "Living", certainty: "Living clade",
      summary: "Small-bodied apes specialized for rapid arm-swinging beneath branches.",
      significance: "Gibbons are the sister branch to great apes and show that ape evolution includes several independent locomotor and social experiments.",
      traits: ["Very long arms", "Brachiation", "No external tail", "Loud territorial songs"],
      habitat: "Tropical and subtropical forest", diet: "Mostly fruit with leaves and insects",
      notAncestor: "A living sister lineage to great apes, not a miniature ancestral ape."
    },
    {
      id: "orangutans", common: "Orangutans", scientific: "Pongo spp.",
      group: "ape", era: "living", age: "Living radiation", ageStart: 0, region: "Borneo and Sumatra",
      status: "Living", certainty: "Living great-ape clade",
      summary: "Large, mostly arboreal great apes with exceptionally flexible joints and long developmental periods.",
      significance: "Orangutans preserve a distinct Asian great-ape branch and demonstrate sophisticated tool use, learning, and cultural variation.",
      traits: ["Long arms", "Flexible hips and shoulders", "Slow life history", "Semi-solitary social system"],
      habitat: "Tropical rainforest", diet: "Mostly fruit, plus leaves, bark, and insects",
      notAncestor: "A cousin branch that diverged before African great apes diversified."
    },
    {
      id: "gorillas", common: "Gorillas", scientific: "Gorilla spp.",
      group: "ape", era: "living", age: "Living radiation", ageStart: 0, region: "Central Africa",
      status: "Living", certainty: "Living great-ape clade",
      summary: "The largest living primates, adapted to terrestrial knuckle-walking and diets rich in leaves or fruit depending on population.",
      significance: "Gorillas are a separate African ape lineage whose anatomy and behavior help researchers distinguish shared inheritance from convergent adaptation.",
      traits: ["Large body", "Knuckle-walking", "Strong sexual dimorphism", "Flexible social systems"],
      habitat: "Lowland and montane forest", diet: "Leaves, stems, and fruit",
      notAncestor: "A sister lineage to the human–chimp branch, not a human ancestor."
    },
    {
      id: "chimpanzees-bonobos", common: "Chimpanzees & bonobos", scientific: "Pan spp.",
      group: "ape", era: "living", age: "Living radiation", ageStart: 0, region: "Central and western Africa",
      status: "Living", certainty: "Closest living relatives of humans",
      summary: "Two closely related African ape species with complex communities, tool traditions, coalition behavior, and flexible diets.",
      significance: "They share a recent common ancestor with humans, but their modern traits evolved on their own branch and should not be treated as direct snapshots of that ancestor.",
      traits: ["Knuckle-walking", "Tool use", "Fission–fusion societies", "Rich communication"],
      habitat: "Forest and woodland mosaics", diet: "Mostly fruit with leaves, insects, and some vertebrate prey",
      notAncestor: "Our closest living cousins—not our ancestors."
    }
  ],

  timeline: [
    { age: 66, display: "~66 Ma", era: "paleocene", group: "early", title: "Primate relatives appear near the K–Pg boundary", taxon: "Purgatorius", text: "Small mammals close to the primate root occupied arboreal niches soon after the end-Cretaceous extinction. Their exact placement remains debated." },
    { age: 56, display: "~56 Ma", era: "paleocene", group: "early", title: "Grasping before full visual convergence", taxon: "Carpolestes", text: "A grasping big toe with a nail appears in a plesiadapiform that did not yet have strongly forward-facing eyes." },
    { age: 55, display: "~55 Ma", era: "eocene", group: "haplorhine", title: "Early crown primates diversify", taxon: "Archicebus and other euprimates", text: "Warm Eocene forests support rapid radiations of primates with grasping extremities and increased visual specialization." },
    { age: 47, display: "~47 Ma", era: "eocene", group: "strepsirrhine", title: "Adapiforms thrive across northern forests", taxon: "Darwinius, Notharctus, and relatives", text: "Lemur-like adapiforms become diverse, though their precise relationship to living strepsirrhines remains debated." },
    { age: 45, display: "~45–40 Ma", era: "eocene", group: "anthropoid", title: "Probable stem anthropoids in Asia", taxon: "Eosimias and relatives", text: "Tiny Asian fossils strengthen the case for an important Asian phase in early anthropoid evolution." },
    { age: 34, display: "34 Ma", era: "oligocene", group: "anthropoid", title: "Global cooling reshapes primate ranges", taxon: "Eocene–Oligocene transition", text: "Cooling and drying reduce many northern primate communities while Afro-Arabian anthropoids continue to diversify." },
    { age: 30, display: "~30 Ma", era: "oligocene", group: "anthropoid", title: "A rich anthropoid radiation in the Fayum", taxon: "Aegyptopithecus, Apidium, and others", text: "Egyptian fossils preserve stem anthropoids near the early histories of catarrhines and other monkey lineages." },
    { age: 26, display: "By ~26 Ma", era: "oligocene", group: "anthropoid", title: "Anthropoids are established in South America", taxon: "Branisella and early platyrrhines", text: "The ancestors of New World monkeys likely crossed the Atlantic from Africa by rafting on vegetation." },
    { age: 25, display: "~25 Ma", era: "oligocene", group: "ape", title: "Monkey and ape lineages diverge", taxon: "Catarrhine common ancestry", text: "The branch leading to living Old World monkeys separates from the hominoid branch leading to apes and humans." },
    { age: 20, display: "~20–17 Ma", era: "miocene", group: "ape", title: "Early tailless apes diversify in Africa", taxon: "Proconsul-grade apes", text: "Early apes lack external tails but retain largely above-branch, monkey-like trunk and limb use." },
    { age: 17, display: "~17–14 Ma", era: "miocene", group: "ape", title: "Apes expand into Eurasia", taxon: "Multiple hominoid radiations", text: "Warm climates and forest connections allow apes to spread and diversify across Europe and Asia." },
    { age: 12, display: "~12 Ma", era: "miocene", group: "ape", title: "Great-ape body plans diversify", taxon: "Pierolapithecus and relatives", text: "Middle Miocene apes experiment with upright trunks, climbing, suspension, and different combinations of ancestral traits." },
    { age: 10, display: "~12.5–8.5 Ma", era: "miocene", group: "ape", title: "The orangutan branch is visible in the fossil record", taxon: "Sivapithecus", text: "Distinctive facial similarities connect Sivapithecus to the lineage of living orangutans." },
    { age: 7, display: "~7 Ma", era: "miocene", group: "hominin", title: "Possible earliest hominins", taxon: "Sahelanthropus", text: "Fossils from Chad fall close to the estimated human–chimpanzee split; their bipedalism and exact placement remain debated." },
    { age: 6, display: "~6 Ma", era: "miocene", group: "hominin", title: "Early postcranial evidence linked to bipedalism", taxon: "Orrorin", text: "Femoral fragments show traits associated with upright walking while arm bones retain climbing signals." },
    { age: 4.4, display: "4.4 Ma", era: "pliocene", group: "hominin", title: "A woodland mosaic of climbing and bipedal traits", taxon: "Ardipithecus ramidus", text: "A grasping big toe coexists with pelvic features related to bipedality, challenging simple savanna-only stories." },
    { age: 3.66, display: "3.66 Ma", era: "pliocene", group: "hominin", title: "Hominins leave a walking trail", taxon: "Laetoli footprints", text: "Trackways in Tanzania document habitual bipedal movement by an australopith-sized hominin." },
    { age: 3.2, display: "~3.2 Ma", era: "pliocene", group: "hominin", title: "A partial skeleton preserves mosaic anatomy", taxon: "‘Lucy’ — Australopithecus afarensis", text: "A small brain and climbing-capable upper body coexist with a pelvis and lower limb adapted for bipedalism." },
    { age: 2.6, display: "By ~2.6 Ma", era: "pliocene", group: "hominin", title: "Stone-tool traditions become archaeologically visible", taxon: "Oldowan technology", text: "Systematic stone flaking appears in the record; toolmaking cannot be assigned automatically to a single species." },
    { age: 2.3, display: "~2.3–1.2 Ma", era: "quaternary", group: "hominin", title: "A specialized chewing branch", taxon: "Paranthropus boisei", text: "Huge cheek teeth and powerful chewing anatomy demonstrate that hominin evolution included strongly specialized side branches." },
    { age: 1.9, display: "By ~1.9 Ma", era: "quaternary", group: "hominin", title: "Modern-like body proportions in Homo", taxon: "Homo erectus", text: "Long legs and shorter arms support efficient terrestrial movement, followed by a major expansion beyond Africa." },
    { age: 1.76, display: "~1.76 Ma", era: "quaternary", group: "hominin", title: "Large cutting tools spread", taxon: "Acheulean technology", text: "Handaxes and related tools mark a major technological tradition associated with several later Homo populations." },
    { age: 0.7, display: "~700–550 ka", era: "quaternary", group: "hominin", title: "Neanderthal–modern human ancestral populations diverge", taxon: "Middle Pleistocene Homo", text: "Genetic estimates place the separation of the lineages leading toward Neanderthals and modern humans in this broad interval." },
    { age: 0.4, display: "~400 ka", era: "quaternary", group: "hominin", title: "Classic Neanderthal lineage emerges", taxon: "Homo neanderthalensis", text: "Neanderthal populations develop across Europe and western Asia, later overlapping and interbreeding with Homo sapiens." },
    { age: 0.3, display: "~300 ka", era: "quaternary", group: "hominin", title: "Early Homo sapiens in Africa", taxon: "Homo sapiens", text: "Fossils show our species emerging through a geographically structured African evolutionary history." },
    { age: 0.07, display: "~70–50 ka", era: "quaternary", group: "hominin", title: "Major Homo sapiens dispersals beyond Africa", taxon: "Modern humans", text: "Populations expand across Eurasia and beyond, meeting and exchanging genes with other human lineages." },
    { age: 0.04, display: "~40 ka", era: "quaternary", group: "hominin", title: "Neanderthals disappear as a distinct lineage", taxon: "Homo neanderthalensis", text: "Neanderthals vanish from the fossil record, though part of their ancestry persists in many living human genomes." }
  ],

  tree: {
    id: "root", name: "Primate total group", latin: "Primates + close relatives", age: "Late Cretaceous–Paleocene roots", group: "early", note: "The deepest origin is reconstructed from fossils and molecular clocks.",
    children: [
      {
        id: "plesiadapiforms", name: "Plesiadapiform-grade relatives", latin: "Stem primate relatives", age: "~66–55 Ma", group: "early", note: "Close relatives near the primate root; exact membership in Primates is debated.",
        children: [
          { id: "purgatorius-node", name: "Purgatorius", latin: "Purgatorius spp.", age: "~66–63 Ma", group: "early", speciesId: "purgatorius" },
          { id: "carpolestes-node", name: "Carpolestes", latin: "Carpolestes simpsoni", age: "~56 Ma", group: "early", speciesId: "carpolestes" }
        ]
      },
      {
        id: "crown-primates", name: "Crown primates", latin: "Euprimates", age: "Diversified by ~56 Ma", group: "haplorhine", note: "The last common ancestor of living primates and all descendants.",
        children: [
          {
            id: "strepsirrhini", name: "Strepsirrhines", latin: "Strepsirrhini", age: "Eocene–present", group: "strepsirrhine", note: "Lemurs, lorises, and galagos plus extinct relatives.",
            children: [
              { id: "adapiforms", name: "Adapiform-grade primates", latin: "Adapiformes", age: "Eocene", group: "strepsirrhine", speciesId: "notharctus" },
              { id: "lemur-loris", name: "Lemurs, lorises & galagos", latin: "Crown strepsirrhines", age: "Living radiation", group: "strepsirrhine", speciesId: "lemurs" }
            ]
          },
          {
            id: "haplorhini", name: "Haplorhines", latin: "Haplorhini", age: "Eocene–present", group: "haplorhine", note: "Tarsiers, monkeys, and apes.",
            children: [
              { id: "tarsiiformes", name: "Tarsier branch", latin: "Tarsiiformes", age: "Eocene–present", group: "haplorhine", speciesId: "tarsiers" },
              {
                id: "anthropoids", name: "Anthropoids", latin: "Simiiformes", age: "Eocene–present", group: "anthropoid", note: "New World monkeys and catarrhines.",
                children: [
                  { id: "platyrrhini", name: "New World monkeys", latin: "Platyrrhini", age: "Oligocene–present", group: "anthropoid", speciesId: "new-world-monkeys" },
                  {
                    id: "catarrhini", name: "Catarrhines", latin: "Catarrhini", age: "Oligocene–present", group: "anthropoid", note: "Old World monkeys and apes.",
                    children: [
                      { id: "cercopithecoidea", name: "Old World monkeys", latin: "Cercopithecoidea", age: "Miocene–present", group: "anthropoid", speciesId: "old-world-monkeys" },
                      {
                        id: "hominoidea", name: "Apes", latin: "Hominoidea", age: "Oligocene/Miocene–present", group: "ape", note: "Tailless catarrhines: gibbons and great apes.",
                        children: [
                          { id: "early-apes", name: "Early stem apes", latin: "Proconsul-grade hominoids", age: "Early Miocene", group: "ape", speciesId: "proconsul" },
                          { id: "hylobatidae", name: "Gibbons", latin: "Hylobatidae", age: "Living branch", group: "ape", speciesId: "gibbons" },
                          {
                            id: "hominidae", name: "Great apes", latin: "Hominidae", age: "Miocene–present", group: "ape", note: "Orangutans, African apes, and humans.",
                            children: [
                              { id: "pongo", name: "Orangutan branch", latin: "Pongo", age: "Living branch", group: "ape", speciesId: "orangutans" },
                              {
                                id: "african-apes", name: "African apes", latin: "Homininae", age: "Miocene–present", group: "ape",
                                children: [
                                  { id: "gorilla", name: "Gorilla branch", latin: "Gorilla", age: "Living branch", group: "ape", speciesId: "gorillas" },
                                  {
                                    id: "hominini", name: "Chimpanzee–human branch", latin: "Hominini", age: "Split ~8–6 Ma", group: "hominin",
                                    children: [
                                      { id: "pan", name: "Chimpanzees & bonobos", latin: "Pan", age: "Living branch", group: "ape", speciesId: "chimpanzees-bonobos" },
                                      {
                                        id: "hominins", name: "Hominins", latin: "Human lineage after the Pan split", age: "~7 Ma–present", group: "hominin", note: "A branching radiation, not a single chain.",
                                        children: [
                                          { id: "early-hominins", name: "Earliest possible hominins", latin: "Sahelanthropus, Orrorin, Ardipithecus", age: "~7–4.4 Ma", group: "hominin", speciesId: "sahelanthropus" },
                                          { id: "australopiths", name: "Australopith radiation", latin: "Australopithecus + Paranthropus", age: "~4.2–1.2 Ma", group: "hominin", speciesId: "australopithecus-afarensis" },
                                          { id: "homo", name: "Genus Homo", latin: "Homo", age: "~2.8 Ma–present", group: "hominin", speciesId: "homo-erectus",
                                            children: [
                                              { id: "neanderthal-line", name: "Neanderthal branch", latin: "Homo neanderthalensis", age: "~400–40 ka", group: "hominin", speciesId: "homo-neanderthalensis" },
                                              { id: "sapiens-line", name: "Modern human branch", latin: "Homo sapiens", age: "~300 ka–present", group: "hominin", speciesId: "homo-sapiens" }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  adaptations: {
    vision: {
      number: "01", title: "Vision moves to the center", kicker: "Depth, color, and attention",
      intro: "Forward-facing eyes increase overlap between the visual fields. Primates also expanded neural investment in visual processing, but vision differs sharply across branches.",
      points: [
        ["Stereoscopic overlap", "Overlapping visual fields support depth judgments useful in complex three-dimensional environments."],
        ["Reduced reliance on smell", "In many haplorhines, the snout shortens and the visual system becomes especially prominent."],
        ["Color vision evolves more than once", "Routine trichromacy characterizes Old World monkeys and apes, while New World monkey color vision varies by lineage and sex."]
      ],
      evidence: "Eye-orbit orientation, skull anatomy, retinal biology, opsin genes, and living behavior.", art: "vision"
    },
    hands: {
      number: "02", title: "Grasping before greatness", kicker: "Nails, touch, and manipulation",
      intro: "Primate hands and feet are flexible grasping structures, but there is no single ‘primate hand.’ Different branches emphasize clinging, leaping, suspension, precision, or terrestrial support.",
      points: [
        ["Opposability varies", "A divergent first digit improves grasping, yet its range and strength differ among primates."],
        ["Nails replace many claws", "Flattened nails and sensitive pads increase tactile contact, though grooming claws persist in several groups."],
        ["Hands can be both locomotor and manipulative", "A chimpanzee hand, a gibbon hook-grip, and a human precision grip solve different evolutionary problems."]
      ],
      evidence: "Finger bones, joint surfaces, muscle attachments, footprints, trackways, and observed grasping.", art: "hands"
    },
    locomotion: {
      number: "03", title: "There is no default primate gait", kicker: "Cling, leap, swing, climb, walk",
      intro: "Primate branches repeatedly redesigned the trunk and limbs. Locomotion includes vertical clinging and leaping, above-branch quadrupedalism, brachiation, knuckle-walking, slow climbing, and habitual bipedalism.",
      points: [
        ["Apes reorganize the trunk", "Broad chests, mobile shoulders, and shortened lower backs support upright climbing and suspension in different combinations."],
        ["Bipedalism is older than big brains", "Hominin pelvic and lower-limb adaptations appeared millions of years before dramatic brain expansion."],
        ["Mosaics persist", "Early hominins could combine climbing-capable upper bodies with increasingly specialized bipedal lower bodies."]
      ],
      evidence: "Vertebrae, pelvises, femora, limb proportions, joint surfaces, footprints, and experimental biomechanics.", art: "locomotion"
    },
    teeth: {
      number: "04", title: "Teeth record ecological history", kicker: "Diet written in enamel",
      intro: "Teeth preserve well, making them central to primate paleontology. Shape, enamel thickness, wear, and chemistry reveal both ancestry and feeding behavior.",
      points: [
        ["Dental formulas mark major groups", "Living catarrhines typically have two premolars per quadrant, while many platyrrhines retain three."],
        ["Shape reflects processing", "Sharp crests shear leaves; rounded cusps crush fruit; enlarged incisors can gouge bark or access gums."],
        ["Specialization can be misleading", "Similar diets can produce convergent dental features in distantly related lineages."]
      ],
      evidence: "Tooth shape, microscopic wear, enamel isotopes, jaw mechanics, and comparisons with living diets.", art: "teeth"
    },
    brain: {
      number: "05", title: "Brains evolve with bodies and societies", kicker: "Learning, development, and culture",
      intro: "Primates generally invest heavily in learning and prolonged development, but cognition is not a single scale. Social and ecological challenges select for different skills.",
      points: [
        ["Relative size is only one measure", "Internal organization, connectivity, development, and sensory priorities matter as much as volume."],
        ["Long childhoods support learning", "Slow life histories create time for social learning, skill acquisition, and flexible behavior."],
        ["Culture is not exclusively human", "Tool traditions and socially transmitted behaviors occur in apes and monkeys, while human cumulative culture reaches a distinctive scale."]
      ],
      evidence: "Cranial endocasts, comparative neuroanatomy, genomics, development, field observation, and archaeology.", art: "brain"
    }
  }
};
