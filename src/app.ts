import 'bootstrap'

export class App {
  public changes: any[] = [
    {
      range: {
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: 1,
        endColumn: 1
      },
      text:
        "Άμωμον Αίμα\r\n\r\nΒίος και πολιτεία μιας παρα λίγο επαναστάτριας.\r\n\r\nΗ Τασσία ζει σε μια μικρή επαρχιακή πόλη, τώρα πια.\r\n\r\nΒγάζει το ψωμί της ξενοδουλεύοντας σ' ένα απ' τα πλουσιόσπιτα της περιοχής, όμως είναι πολύ μεγάλη και δεν θα 'πρεπε να εργάζεται άλλο. Τη δουλειά αυτή την βρήκε μόνο και μόνο επειδή είναι από την Αθήνα, πράγμα που έχει την σημασία του στην μικρή της πόλη. Το αφεντικό της ψευτο-ασχολείται με (περιφερειακά) ευρωπαϊκά προγράμματα, ενώ η ανικανοποίητη γυναίκα του φροντίζει να του μαυρίζει τη ζωή, χωρίς όμως κι' η ίδια να περνάει πολύ καλύτερα, αφού παραπαίει συνεχώς μεταξύ κατάθλιψης και υστερίας (επαρχιακού τύπου).\r\n\r\nΤα βράδια, αλλά και όποτε άλλοτε μπορεί ν' αποτραβηχτεί λίγο, η Τασσία καταφεύγει σε ουσίες που της προσφέρουν εξωπραγματικές (αλλά μάλλον αρρωστημένες) εμπειρίες. Η επήρρεια τους δεν κρατάει πολύ και τότε μένει ανυπεράσπιστη απέναντι στη μνήμη της. Προσπαθεί φιλότιμα ν' αντισταθεί, αλλά, τελικά, καταλήγει να μηρυκάζει αδιάλειπτα το παρελθόν. Ξαναζεί μια-μια τις στιγμές που έζησε, πρώτα στη Μονή Ταώ και, αργότερα, στην Αθήνα. Προσπαθεί να αξιολογήσει τις πράξεις της και ν' αποφασίσει αν έζησε σωστά. Κάποτε, είχε κοντέψει να γίνει—ή νόμισε πως θα γινόταν—σημαίνον πρόσωπο. Αν και την ονειρευόταν μια τέτοια εξέλιξη, ποτέ δεν την επιδίωξε συστηματικά, φοβούμενη την ενδεχόμενη αποτυχία. Όταν, τελικά, της έτυχε η ευκαιρία, δεν άντεξε την πίεση κι' αναγκάστηκε να αποτραβηχτεί. Κι' έκτοτε, αμφιταλαντεύεται κι' αναρωτιέται. \"Πώς θα 'ταν, αν...\"\r\n\r\nΑλλά λένε ποτέ οι βιογραφίες την αλήθεια;\r\n\r\n----\r\n\r\nΗ ιστορία παλινδρομεί συνεχώς μεταξύ παρόντος και παρελθόντος.\r\n\r\nΣτο παρόν, εκτυλίσσεται μια ημέρα της Τασσίας, αρχικά στο σπίτι όπου εργάζεται ως οικόσιτη αιμοδότης, και αργότερα έξω, στην πόλη, συνοδεύοντας τ' αφεντικά της.\r\n\r\nΣτο παρελθόν, η Τασσία αναπολεί αναμνήσεις απ' την παλιότερη ζωή της στην Μονή και την Αθήνα.\r\n\r\nΗ ηρωίδα ζει σε μια εποχή παρακμιακή, πολύ μετά τους Αυτοματισμούς και την Τεχνητή Ευφυία. Τα συστήματα και οι μηχανισμοί, απ' τους οποίους εξαρτάται πια ολοκληρωτικά η ζωή των ανθρώπων, δεν μοιάζουν να λειτουργούν αποτελεσματικά. Όμως κανείς δεν είναι σίγουρος, ούτε και ξέρει να επέμβει με οποιοδήποτε τρόπο. Στον αέρα, πλανάται η δυσωσμία του αναπόφευκτου. Η ζωή μοιάζει σαν να παίρνει φόρα, έτοιμη να σαρώσει τα επιτεύγματα του παρελθόντος. Με τι υλικό θα τα αντικαταστήσει; Μέταλλο ή πέτρα; Πάντως, η στιγμή αυτή δεν έχει έρθει ακόμη.\r\n\r\nΌσο για την _αρρώστια_, αυτή ήρθε ως επιστέγασμα—και όχι γεννεσιουργός αιτία, αν και συνήθως σαν τέτοια παρουσιάζεται—της γενικευμένης κρίσης.\r\n\r\nΠαρένθεση: Γιατί συνέβη η κρίση; Τα συστήματα, είχαν, προ πολλού, αυτονομηθεί. Αόρατα και απροβλημάτιστα εξελίχθηκαν από σύμβουλοι στη ζωή των ανθρώπων, σε πολύτιμους βοηθούς, και στην συνέχεια σε κυρίαρχους. Πολύ σύντομα, δεν απέμεινε  κανείς πια που να γνωρίζει ή να έχει τρόπο να μάθει τι έκαναν και τι σκοπούς είχαν, μια και τα συστήματα φρόντιζαν να κρατούν τους ανθρώπους βουτηγμένους στον πλέον φρικαλέο λαϊκισμό.\r\n\r\nΠαρ' όλη όμως τη σοφία τους, τελικά, τα θαυμαστά αυτά συστήματα φαίνεται πως απέτυχαν. Όπως και πάμπολες ανθρώπινες κοινωνίες, που στην διάρκεια της ιστορίας έχασαν την δυναμική τους κι' έσβησαν, χωρίς μάλιστα να συμβεί και κάποιο ιδιαίτερα δραματικό γεγονός, έτσι κάπως πρέπει να παρήκμασε και η εποχή των συστημάτων. Κλείνει η παρένθεση.\r\n\r\nΚάτι που δεν βοηθάει καθόλου τα πράγματα είναι πως πριν επέλθει η κρίση, η τεχνολογική πρόοδος είχε μεν επιτρέψει την δωρεάν κάλυψη όλων των βασικών βιοτικών αναγκών, ταυτόχρονα όμως είχε αποκλείσει τον μέσο άνθρωπο απ' τις περισσότερες παραγωγικές δραστηριότητες.\r\n\r\nΌσοι δεν μπορούσαν ή δεν ήθελαν να εργαστούν, περνούσαν την ώρα τους χαμένοι σε ιδεατές πραγματικότητες, αποχαυνωμένοι με παιχνίδια και παραισθησιογόνα. Αυτούς ήταν που χτύπησε, κατ' αρχήν, η _αρρώστια_ και τους εξολόθρευσε σχεδόν ολοκληρωτικά. Παράλληλα, η _αρρώστια_ εξαπλώθηκε και στον υπόλοιπο πληθυσμό, ο οποίος όμως είχε τα μέσα—και την διάθεση—να αντιδράσει. Η _αρρώστια_ προχώρησε με πολύ βραδύτερους ρυθμούς σε αυτή την μερίδα του πληθυσμού.\r\nΆρα αυτό που ουσιαστικά παρακολουθούμε να λειτουργεί, δεν είναι παρά ο νόμος της εξέλιξης.\r\n"
    },
    {
      range: {
        startLineNumber: 32,
        startColumn: 91,
        endLineNumber: 32,
        endColumn: 91
      },
      text: '\r\n'
    },
    {
      range: {
        startLineNumber: 33,
        startColumn: 1,
        endLineNumber: 33,
        endColumn: 1
      },
      text: '\r\n'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 1,
        endLineNumber: 34,
        endColumn: 1
      },
      text: 't'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 2,
        endLineNumber: 34,
        endColumn: 2
      },
      text: 'e'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 3,
        endLineNumber: 34,
        endColumn: 3
      },
      text: 's'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 4,
        endLineNumber: 34,
        endColumn: 4
      },
      text: 't'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 5,
        endLineNumber: 34,
        endColumn: 5
      },
      text: 'i'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 6,
        endLineNumber: 34,
        endColumn: 6
      },
      text: 'n'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 7,
        endLineNumber: 34,
        endColumn: 7
      },
      text: 'g'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 8,
        endLineNumber: 34,
        endColumn: 8
      },
      text: ' '
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 9,
        endLineNumber: 34,
        endColumn: 9
      },
      text: 'a'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 10,
        endLineNumber: 34,
        endColumn: 10
      },
      text: 'g'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 11,
        endLineNumber: 34,
        endColumn: 11
      },
      text: 'a'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 12,
        endLineNumber: 34,
        endColumn: 12
      },
      text: 'i'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 13,
        endLineNumber: 34,
        endColumn: 13
      },
      text: 'n'
    },
    {
      range: {
        startLineNumber: 34,
        startColumn: 14,
        endLineNumber: 34,
        endColumn: 14
      },
      text: '\r\n'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 1,
        endLineNumber: 35,
        endColumn: 1
      },
      text: '1'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 2,
        endLineNumber: 35,
        endColumn: 2
      },
      text: '2'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 3,
        endLineNumber: 35,
        endColumn: 3
      },
      text: '3'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 4,
        endLineNumber: 35,
        endColumn: 4
      },
      text: '4'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 5,
        endLineNumber: 35,
        endColumn: 5
      },
      text: '5'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 6,
        endLineNumber: 35,
        endColumn: 6
      },
      text: '6'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 7,
        endLineNumber: 35,
        endColumn: 7
      },
      text: '7'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 8,
        endLineNumber: 35,
        endColumn: 8
      },
      text: '8'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 9,
        endLineNumber: 35,
        endColumn: 9
      },
      text: '9'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 10,
        endLineNumber: 35,
        endColumn: 10
      },
      text: '0'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 11,
        endLineNumber: 35,
        endColumn: 11
      },
      text: '9'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 12,
        endLineNumber: 35,
        endColumn: 12
      },
      text: '8'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 13,
        endLineNumber: 35,
        endColumn: 13
      },
      text: '7'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 14,
        endLineNumber: 35,
        endColumn: 14
      },
      text: '6'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 15,
        endLineNumber: 35,
        endColumn: 15
      },
      text: '5'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 16,
        endLineNumber: 35,
        endColumn: 16
      },
      text: '4'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 17,
        endLineNumber: 35,
        endColumn: 17
      },
      text: '3'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 18,
        endLineNumber: 35,
        endColumn: 18
      },
      text: '2'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 19,
        endLineNumber: 35,
        endColumn: 19
      },
      text: '1'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 20,
        endLineNumber: 35,
        endColumn: 20
      },
      text: '2'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 21,
        endLineNumber: 35,
        endColumn: 21
      },
      text: '3'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 22,
        endLineNumber: 35,
        endColumn: 22
      },
      text: '4'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 23,
        endLineNumber: 35,
        endColumn: 23
      },
      text: '5'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 24,
        endLineNumber: 35,
        endColumn: 24
      },
      text: '6'
    },
    {
      range: {
        startLineNumber: 35,
        startColumn: 25,
        endLineNumber: 35,
        endColumn: 25
      },
      text: '7'
    }
  ]
}
