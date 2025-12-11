import Image from "next/image"
import { Search, Calendar, BookOpen, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Removed the top info bar */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/abstract-brain-logo.png" alt="ΕΛΛ.Α.ΝΑ Logo" width={50} height={50} className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#1e3a8a]">ΕΛΛ.Α.ΝΑ</span>
              <span className="text-xs text-gray-600">Ελληνική Ακαδημία Νευροανοσολογίας</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center">
            <div className="flex bg-gray-50 rounded-full p-1">
              <a
                href="#"
                className="text-[#1e3a8a] text-xs uppercase tracking-tight font-medium hover:bg-white hover:shadow-sm px-3 py-2 rounded-full transition-all"
              >
                Η ΑΚΑΔΗΜΙΑ
              </a>
              <a
                href="#"
                className="text-[#1e3a8a] text-xs uppercase tracking-tight font-medium hover:bg-white hover:shadow-sm px-3 py-2 rounded-full transition-all"
              >
                ΣΥΝΕΔΡΙΑ
              </a>
              <a
                href="#"
                className="text-[#1e3a8a] text-xs uppercase tracking-tight font-medium hover:bg-white hover:shadow-sm px-3 py-2 rounded-full transition-all"
              >
                ΕΡΓΑΣΙΕΣ
              </a>
              <a
                href="#"
                className="text-[#1e3a8a] text-xs uppercase tracking-tight font-medium hover:bg-white hover:shadow-sm px-3 py-2 rounded-full transition-all"
              >
                BRAIN PROTECTION
              </a>
              <a
                href="#"
                className="text-[#1e3a8a] text-xs uppercase tracking-tight font-medium hover:bg-white hover:shadow-sm px-3 py-2 rounded-full transition-all"
              >
                ΜΕΛΗ
              </a>
              <a
                href="#"
                className="text-[#1e3a8a] text-xs uppercase tracking-tight font-medium hover:bg-white hover:shadow-sm px-3 py-2 rounded-full transition-all"
              >
                ΝΕΑ
              </a>
              <a
                href="#"
                className="text-[#1e3a8a] text-xs uppercase tracking-tight font-medium hover:bg-white hover:shadow-sm px-3 py-2 rounded-full transition-all"
              >
                ΕΠΙΚΟΙΝΩΝΙΑ
              </a>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Input type="search" placeholder="Αναζήτηση..." className="w-[180px] h-9 pl-8 rounded-full text-sm" />
              <Search className="absolute left-2.5 top-2 h-4 w-4 text-gray-500" />
            </div>
            <Button variant="outline" size="icon" className="lg:hidden h-9 w-9">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Rest of the content remains the same */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/medical-microscope-neurology-cells.png"
            alt="Neuroscience Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Προάγοντας την Έρευνα και την Εκπαίδευση στη Νευροανοσολογία
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Η Ελληνική Ακαδημία Νευροανοσολογίας (ΕΛΛ.Α.ΝΑ) ιδρύθηκε το 2012 με σκοπό την προαγωγή της επιστημονικής
              έρευνας και εκπαίδευσης στον τομέα της νευροανοσολογίας.
            </p>
            <Button className="bg-white text-[#1e3a8a] hover:bg-gray-100">Μάθετε Περισσότερα</Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Featured Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#1e3a8a]">ΠΡΟΣΦΑΤΑ ΝΕΑ</h2>
            <a href="#" className="text-blue-600 hover:underline flex items-center gap-1 text-sm">
              Δείτε Όλα <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-100 relative">
                <Image src="/neurology-conference.png" alt="Conference Announcement" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Webinar on Safety Tests in the Clinical Management of MS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Thursday March 6, 2025 16:30-17:30 CET</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Περισσότερα
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-100 relative">
                <Image src="/medical-journal-neurology.png" alt="Journal Publication" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">EBIN Journal Club with Authors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Tuesday February 25, 2025 15:00-16:00 CET</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Περισσότερα
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-100 relative">
                <Image src="/brain-research.png" alt="Research Update" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Νέες Εξελίξεις στη Θεραπεία της Πολλαπλής Σκλήρυνσης</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Ενημερωθείτε για τις τελευταίες εξελίξεις στον τομέα</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Περισσότερα
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">ΕΠΙΣΤΗΜΟΝΙΚΟΙ ΠΟΡΟΙ</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-50">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-[#1e3a8a] p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle>ΠΕΡΙΟΔΙΚΟ ΝΕΥΡΟΑΝΟΣΟΛΟΓΙΑ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/neurology-journal-cover.png"
                    alt="Journal Cover"
                    width={150}
                    height={200}
                    className="border shadow-sm"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mb-2">ΝΕΟ</p>
                <p className="text-center font-medium">Τεύχος 4 - Τόμος 4</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Διαβάστε Τώρα
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-50">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-[#1e3a8a] p-3 rounded-full">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle>E-JOURNAL ΕΛΛ.Α.ΝΑ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4">
                  <Image src="/e-journal-icon.png" alt="E-Journal" width={200} height={100} className="h-32 w-auto" />
                </div>
                <p className="text-center mb-2">E-journal webinars</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Επισκεφθείτε
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-50">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-[#1e3a8a] p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <CardTitle>ΗΜΕΡΟΛΟΓΙΟ ΙΑΤΡΙΚΩΝ ΣΥΝΕΔΡΙΩΝ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4">
                  <Image src="/medical-calendar.png" alt="Calendar" width={150} height={150} className="h-32 w-auto" />
                </div>
                <p className="text-center mb-2">Προσεχή συνέδρια και εκδηλώσεις</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Δείτε το Ημερολόγιο
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Research Focus Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">
            ΕΡΩΤΗΜΑΤΟΛΟΓΙΟ ΓΙΑ ΤΙΣ ΝΟΗΤΙΚΕΣ ΛΕΙΤΟΥΡΓΙΕΣ ΣΤΗΝ ΠΟΛΛΑΠΛΗ ΣΚΛΗΡΥΝΣΗ
          </h2>

          <div className="prose max-w-none">
            <p>
              Η Ελληνική Ακαδημία Νευροανοσολογίας (ΕΛΛ.Α.ΝΑ.) διεξάγει έρευνα σχετικά με τις νοητικές λειτουργίες
              (σκέψη, μνήμη, συγκέντρωση, ταχύτητα επεξεργασίας, προσοχή, οπτικοχωρική αντίληψη κ.ά.) στην πολλαπλή
              σκλήρυνση.
            </p>
            <p>
              Παρακαλούμε, αν είστε ασθενής με πολλαπλή σκλήρυνση ή φροντιστής ασθενούς με πολλαπλή σκλήρυνση, να
              συμπληρώσετε ανώνυμα το ερωτηματολόγιο της ΕΛΛ.Α.ΝΑ. για την αντιμετώπιση των σχετικών παρεμβολών νόησης.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#1e3a8a]">ΕΡΩΤΗΜΑΤΟΛΟΓΙΟ ΓΙΑ ΑΤΟΜΑ ΜΕ ΠΟΛΛΑΠΛΗ ΣΚΛΗΡΥΝΣΗ</Button>
            <Button className="bg-[#1e3a8a]">ΕΡΩΤΗΜΑΤΟΛΟΓΙΟ ΓΙΑ ΕΠΑΓΓΕΛΜΑΤΙΕΣ ΥΓΕΙΑΣ</Button>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">
            ΕΛΛΗΝΙΚΗ ΑΚΑΔΗΜΙΑ ΝΕΥΡΟΑΝΟΣΟΛΟΓΙΑΣ - HELLENIC ACADEMY OF NEUROIMMUNOLOGY
          </h2>

          <div className="prose max-w-none">
            <p>
              Η Ελληνική Ακαδημία Νευροανοσολογίας ιδρύθηκε το 2012 με σκοπό την: α) διεξαγωγή της επιστημονικής και της
              ερευνητικής δραστηριότητας στον τομέα της νευροανοσολογίας, β) την προαγωγή της γνώσεως της επιστήμης, της
              εκπαιδεύσεως, καθώς και τη βελτίωση των κλινικών αποτελεσμάτων στις ανοσοδιαμεσολαβούμενες νόσους που
              εκτρέπουν τη λειτουργία του νευρικού συστήματος και των μυών, γ) την αντιμετώπιση των προβλημάτων της
              Ελληνικής κοινωνίας που απορρέουν από τις ανοσοδιαμεσολαβούμενες νόσους του νευρικού συστήματος και των
              μυών, δ) την ανάπτυξη της νευροανοσολογικής έρευνας για τους ίδιους τους ασθενείς, ε) την καταπολέμηση των
              νόσων νευροανοσολογίας, τόσο στην Ελλάδα, όσο και διεθνώς, στ) την ανάπτυξη νέων ανοσοθεραπειών και τη
              βελτίωση της αποτελεσματικότητας των ήδη υπαρχουσών ανοσοθεραπειών, ζ) τη διεύρυνση της
              αποτελεσματικότητας των ανοσοθεραπειών και σε άλλες νόσους του νευρικού συστήματος, η) την προαγωγή της
              ηθικής στη διεξαγωγή ερευνών που αφορά με κανόνες με σεβασμό τα δικαιώματα των ασθενών και την ελευθερία
              όλων εχεχέμυθων στον τομέα της νευροανοσολογίας.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Ακαδημαϊκά Ιδρύματα</h3>
            <p className="mb-4">
              Αποτελεί την κοινή προσπάθεια των ακαδημαϊκών νευρολογικών ιδρυμάτων και δραστηριοποιείται στους τομείς
              της νευροανοσολογίας στην Ελλάδα. Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης, Πανεπιστήμιο Θεσσαλίας,
              Πανεπιστήμιο Ιωαννίνων, Πανεπιστήμιο Κρήτης, Πανεπιστήμιο Πατρών, Εθνικό Καποδιστριακό Πατρών, Δημοκρίτειο
              Αθηνών, Ινστιτούτο Φλέμινγκ και το Εθνικό Κέντρο Έρευνας και Τεχνολογικής Ανάπτυξης.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">ΕΠΙΚΟΙΝΩΝΙΑ</h3>
              <address className="not-italic">
                <p className="mb-2">Ελληνική Ακαδημία Νευροανοσολογίας</p>
                <p className="mb-2">Λεωφόρος Κηφισίας 123</p>
                <p className="mb-2">11525, Αθήνα</p>
                <p className="mb-2">Τηλ: +30 210 777 7777</p>
                <p className="mb-2">Email: info@ellana.gr</p>
              </address>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">ΣΥΝΔΕΣΜΟΙ</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Αρχική
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Η Ακαδημία
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Συνέδρια
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Περιοδικό
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Ανακοινώσεις
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Επικοινωνία
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">ΕΓΓΡΑΦΗ ΣΤΟ NEWSLETTER</h3>
              <p className="mb-4">Μείνετε ενημερωμένοι για τις τελευταίες εξελίξεις και τα νέα της ΕΛΛ.Α.ΝΑ.</p>
              <form className="space-y-3">
                <Input
                  type="email"
                  placeholder="Το email σας"
                  className="bg-white/10 border-white/20 placeholder:text-white/50 text-white"
                />
                <Button className="w-full bg-white text-[#1e3a8a] hover:bg-gray-100">Εγγραφή</Button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Ελληνική Ακαδημία Νευροανοσολογίας. Με επιφύλαξη παντός δικαιώματος.</p>
            <div className="mt-2">
              <a href="#" className="hover:underline mx-2">
                Όροι Χρήσης
              </a>
              <a href="#" className="hover:underline mx-2">
                Πολιτική Απορρήτου
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
