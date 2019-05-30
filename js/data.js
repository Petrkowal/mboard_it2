clanky = [
    {
        'id': 'gpubus',
        'head': 'PCI-Express (PCIe / PCI-E / 3GIO - 3rd Generation I/O)',
        'text': 'PCI-Express je v informatice standard systémové sběrnice, který byl vytvořen jako náhrada za starší standardy PCI, PCI-X a AGP. Používá se většinou k připojení grafické karty (x16 - rychlost teoreticky až 16GB/s jednosměrně -> 32GB/s obousměrně), ale i k přiojení dalších komponentů, které vyžadují vysokou rychlost, například SSD - port M.2 (přes southbridge). Sběrnice PCI-Express používá sériový přenos dat (na rozdíl od svých předchůdců), protože to přináší proti paralelnímu přenosu některé výhody, zejména možnost dále zvyšovat frekvenci, na které sběrnice pracuje (a tím i přenosovou rychlost), protože u paralelní komunikace začalo při vysokých frekvencích docházet k nežádoucímu vzájemnému ovlivňování vodičů a vyvstaly problémy se synchronizací.'
    },

    {
        'id': 'cpubus',
        'head': 'Front Side Bus (FSB)',
        'text': 'FSB je fyzická obousměrná datová sběrnice, která přenáší veškeré informace mezi CPU a Northbridge. Frekvence, se kterou procesor (CPU) pracuje, je určena použitím hodin násobících rychlost FSB. Například procesor běžící na frekvenci 550 MHz používá 100 MHz FSB sběrnici. To znamená, že interní násobič (Multiplier – hodnota, která procesoru říká, na jaké frekvenci má pracovat), je nastaven na 5,5. Procesor je nastaven na frekvenci 5,5krát vyšší, než je frekvence FSB: 100 MHz × 5,5 = 550 MHz. Proměnnou může být rychlost FSB nebo násobiče. Proto může být dosaženo rozdílných rychlostí CPU.Rychlost (frekvence) je vyjadřována obvykle pracovní frekvencí (někdy se uvádí přímý takt sběrnice, někdy zase dvojnásobná rychlost přenosu dat). U procesorů společnosti AMD se můžeme setkat s frekvencemi FSB 100 MHz, 133 MHz, 166 MHz a 200 MHz (datově: 200 MHz, 266 MHz, 333 MHz a 400 MHz). U procesorů firmy Intel se datová rychlost násobí čtyřikrát (133 MHz × 4 = 533 MHz FSB).'
    },

    {
        'id': 'rambus',
        'head': 'DDR4 SDRAM',
        'text': 'DDR4 SDRAM (Double Data Rate 4 Synchronous Dynamic Random Access Memory) je typ paměti používaný v dnešních PC. Na trh byla uvedena v roce 2014 a je jednou z nejnovějších variant DRAM, z nichž některé byly v provozu od začátku roku 1970. Svojí rychlostí překonává své předchůdce, technologie DDR2 a DDR3. Vzhledem k různé signalizaci napětí a různému fyzickému rozhraní není DDR4 kompatibilní s jakýmkoliv předchozím typem paměti přímým přístupem (RAM). Hlavními výhodami DDR4 je vyšší hustota modulu a nižší požadavky na napětí, spolu s vyšší přenosovou rychlostí dat. Standardní DDR4 teoreticky umožňuje modulům DIMM kapacitu až 512 GiB, ve srovnání s DDR3, která má své teoretické maximum 128 GiB za DIMM. DDR4 pracuje při napětí 1,2 V s frekvencí mezi 800 a 1600 Mhz.'
    },

    {
        'id': 'hddbus',
        'head': 'SATA 3.0 (SATA 6Gb/s)',
        'text': 'Serial ATA (SATA) označuje v informatice počítačovou sběrnici, která využívá datové rozhraní pro připojení velkokapacitních paměťových zařízení, jako jsou pevné a optické disky. V dnešní době je SATA řadičem vybavena většina stolních a přenosných počítačů. Přenosová rychlost standardu SATA 6 Gbit/s je 600 MB/s. Frekvence SATA 3 - 6 GHz. Některé nové SSD disky se už nepřipojují přes SATA, ale přes port M.2, který používá PCIe x4 - jednosměrně až 4GB/s.'
    },

    {
        'id': 'nbsb',
        'head': 'Direct Media Interface',
        'text': 'DMI používá firma Intel, pomocí DMI jsou propojeny northbridge a southbridge. Zvládne až 8 GT/s na jednu linku. Používá se většinou x4, datová propustnost mezi northbridge a southbridge je až 4GB/s.'
    }
];

fotky = [
    {
        'id': 0,
        'file': 'asus.jpg'
    },

    {
        'id': 1,
        'file': 'msi.jpg'
    },

    {
        'id': 2,
        'file': 'myboard.png'
    },

    {
        'id': 3,
        'file': 'strix.png'
    }
]
