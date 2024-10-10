//Array para almacenar los productos y luego generarlos con JavaScript
const productos = [
    {
        id: 1,
        nombre: "Smartphone Galaxy S23",
        imagen: "./img/galaxy_s23.jpg",
        descripcion: "Último modelo de Samsung con cámara de alta resolución y pantalla AMOLED.",
        precio: 899.99,
        stock: 10
    },
    {
        id: 2,
        nombre: "Portátil MacBook Pro 14\"",
        imagen: "./img/macbook_pro_14.jpg",
        descripcion: "MacBook Pro con chip M2, pantalla Liquid Retina y excelente rendimiento.",
        precio: 1999.99,
        stock: 10
    },
    {
        id: 3,
        nombre: "Tarjeta Gráfica NVIDIA RTX 3080",
        imagen: "./img/rtx_3080.jpg",
        descripcion: "Tarjeta gráfica de alto rendimiento para gaming y diseño profesional.",
        precio: 699.99,
        stock: 20
    },
    {
        id: 4,
        nombre: "Monitor LG UltraWide 34\"",
        imagen: "./img/monitor_lg_ultrawide.jpg",
        descripcion: "Monitor ultrawide con resolución QHD y tecnología IPS para una experiencia inmersiva.",
        precio: 499.99,
        stock: 25
    },
    {
        id: 5,
        nombre: "Teclado Mecánico RGB",
        imagen: "./img/teclado_mecanico_rgb.jpg",
        descripcion: "Teclado mecánico con retroiluminación RGB y switches Cherry MX.",
        precio: 129.99,
        stock: 15
    },
    {
        id: 6,
        nombre: "Ratón Inalámbrico Logitech MX Master 3",
        imagen: "./img/raton_logitech_mx_master_3.jpg",
        descripcion: "Ratón inalámbrico con alta precisión y múltiples botones programables.",
        precio: 99.99,
        stock: 10
    },
    {
        id: 7,
        nombre: "Disco Duro SSD Samsung 1TB",
        imagen: "./img/ssd_samsung_1tb.jpg",
        descripcion: "Disco SSD de alta velocidad para almacenamiento rápido y fiable.",
        precio: 149.99,
        stock: 15
    },
    {
        id: 8,
        nombre: "Memoria RAM Corsair Vengeance 16GB",
        imagen: "./img/ram_corsair_16gb.jpg",
        descripcion: "Módulo de memoria RAM DDR4 de alto rendimiento para mejorar la velocidad del sistema.",
        precio: 89.99,
        stock: 10
    },
    {
        id: 9,
        nombre: "Placa Base ASUS ROG Strix Z690",
        imagen: "./img/placa_asus_rog_strix_z690.jpg",
        descripcion: "Placa base para entusiastas con soporte para procesadores Intel de 12ª generación.",
        precio: 299.99,
        stock: 20
    },
    {
        id: 10,
        nombre: "Fuente de Poder Corsair 750W",
        imagen: "./img/fuente_poder_corsair_750w.jpg",
        descripcion: "Fuente de poder modular de 750W con certificación 80 Plus Gold.",
        precio: 129.99,
        stock: 15
    },
    {
        id: 11,
        nombre: "Auriculares Bose QuietComfort 35",
        imagen: "./img/auriculares_bose_qc35.jpg",
        descripcion: "Auriculares con cancelación de ruido y sonido de alta calidad.",
        precio: 299.99,
        stock: 10
    },
    {
        id: 12,
        nombre: "Impresora 3D Creality Ender 3",
        imagen: "./img/impresora_ender_3.jpg",
        descripcion: "Impresora 3D de alta precisión para proyectos de fabricación personal.",
        precio: 229.99,
        stock: 25
    },
    {
        id: 13,
        nombre: "Webcam Logitech C920",
        imagen: "./img/webcam_logitech_c920.jpg",
        descripcion: "Webcam Full HD para videoconferencias y streaming de alta calidad.",
        precio: 79.99,
        stock: 20
    },
    {
        id: 14,
        nombre: "SSD Externo Seagate 2TB",
        imagen: "./img/ssd_externo_seagate_2tb.jpg",
        descripcion: "Disco SSD externo con gran capacidad y transferencia rápida de datos.",
        precio: 219.99,
        stock: 30
    },
    {
        id: 15,
        nombre: "Router TP-Link Archer AX6000",
        imagen: "./img/router_tp_link_ax6000.jpg",
        descripcion: "Router WiFi 6 de alto rendimiento para una conexión rápida y estable.",
        precio: 349.99,
        stock: 15
    },
    {
        id: 16,
        nombre: "Unidad de DVD externa",
        imagen: "./img/unidad_dvd_externa.jpg",
        descripcion: "Unidad de DVD externa compatible con PC y consolas de videojuegos.",
        precio: 49.99,
        stock: 10
    },
    {
        id: 17,
        nombre: "Tablet Apple iPad Air",
        imagen: "./img/ipad_air.jpg",
        descripcion: "Tablet ligera y potente con pantalla Retina y soporte para Apple Pencil.",
        precio: 599.99,
        stock: 25
    },
    {
        id: 18,
        nombre: "Smartwatch Garmin Forerunner 945",
        imagen: "./img/garmin_forerunner_945.jpg",
        descripcion: "Smartwatch para deportistas con GPS y seguimiento avanzado de actividad.",
        precio: 499.99,
        stock: 20
    },
    {
        id: 19,
        nombre: "Adaptador Bluetooth USB",
        imagen: "./img/adaptador_bluetooth_usb.jpg",
        descripcion: "Adaptador Bluetooth 5.0 para conectar dispositivos inalámbricos a tu PC.",
        precio: 19.99,
        stock: 25
    },
    {
        id: 20,
        nombre: "Caja para PC NZXT H510",
        imagen: "./img/caja_pc_nzxt_h510.jpg",
        descripcion: "Caja mid-tower con diseño limpio y excelente gestión de cables.",
        precio: 89.99,
        stock: 20
    },
    {
        id: 21,
        nombre: "Disipador Líquido Cooler Master ML240L",
        imagen: "./img/disipador_liquido_master_ml240l.jpg",
        descripcion: "Sistema de refrigeración líquida para mantener tu CPU a temperaturas óptimas.",
        precio: 119.99,
        stock: 15
    },
    {
        id: 22,
        nombre: "Memoria USB SanDisk 128GB",
        imagen: "./img/usb_sandisk_128gb.jpg",
        descripcion: "Memoria USB de alta capacidad y velocidad para almacenamiento portátil.",
        precio: 39.99,
        stock: 10
    },
    {
        id: 23,
        nombre: "Micrófono Blue Yeti",
        imagen: "./img/mic_blue_yeti.jpg",
        descripcion: "Micrófono USB profesional para streaming, podcasting y grabación de audio.",
        precio: 129.99,
        stock: 25
    },
    {
        id: 24,
        nombre: "Hub USB 7 Puertos Anker",
        imagen: "./img/hub_usb_anker.jpg",
        descripcion: "Hub USB con 7 puertos para ampliar la conectividad de tu computadora.",
        precio: 49.99,
        stock: 20
    },
    {
        id: 25,
        nombre: "Tarjeta de Sonido externa Focusrite Scarlett 2i2",
        imagen: "./img/tarjeta_sonido_focusrite.jpg",
        descripcion: "Interfaz de audio profesional para grabación de música y podcasting.",
        precio: 159.99,
        stock: 15
    },
    {
        id: 26,
        nombre: "Cámara Digital Canon EOS Rebel T7",
        imagen: "./img/canon_eos_rebel_t7.jpg",
        descripcion: "Cámara DSLR para fotógrafos principiantes con lentes intercambiables.",
        precio: 549.99,
        stock: 10
    },
    {
        id: 27,
        nombre: "Joystick Thrustmaster T.16000M",
        imagen: "./img/joystick_thrustmaster.jpg",
        descripcion: "Joystick de alta precisión para simuladores de vuelo y gaming.",
        precio: 199.99,
        stock: 25
    },
    {
        id: 28,
        nombre: "Controladora Xbox Wireless",
        imagen: "./img/control_xbox_wireless.jpg",
        descripcion: "Control inalámbrico para Xbox y PC con conexión estable y ergonómica.",
        precio: 59.99,
        stock: 20
    },
    {
        id: 29,
        nombre: "Lámpara LED para Escritorio",
        imagen: "./img/lampara_led_escritorio.jpg",
        descripcion: "Lámpara ajustable con luz LED regulable para una mejor iluminación.",
        precio: 29.99,
        stock: 15
    },
    {
        id: 30,
        nombre: "Soporte para Monitor ajustable",
        imagen: "./img/soporte_monitor.jpg",
        descripcion: "Soporte ergonómico para monitor con ajuste de altura y ángulo.",
        precio: 49.99,
        stock: 20
    },
    {
        id: 31,
        nombre: "Almacenamiento NAS Synology DS220+",
        imagen: "./img/nas_synology_ds220+.jpg",
        descripcion: "Servidor NAS de 2 bahías para almacenamiento y respaldo de datos en red.",
        precio: 299.99,
        stock: 10
    },
    {
        id: 32,
        nombre: "Kit de Limpieza para PC",
        imagen: "./img/kit_limpieza_pc.jpg",
        descripcion: "Kit completo para limpiar y mantener componentes de computadoras.",
        precio: 19.99,
        stock: 15
    },
    {
        id: 33,
        nombre: "Cargador Rápido USB-C Anker",
        imagen: "./img/cargador_usb_c_anker.jpg",
        descripcion: "Cargador USB-C de alta velocidad para dispositivos móviles y laptops.",
        precio: 39.99,
        stock: 10
    },
    {
        id: 34,
        nombre: "Proyector portátil Epson EX3260",
        imagen: "./img/proyector_epson_ex3260.jpg",
        descripcion: "Proyector HD portátil con conectividad inalámbrica para presentaciones y entretenimiento.",
        precio: 499.99,
        stock: 15
    },
    {
        id: 35,
        nombre: "Tablet gráfica Wacom Intuos Pro",
        imagen: "./img/wacom_intuos_pro.jpg",
        descripcion: "Tablet gráfica profesional para diseño y edición digital con lápiz sensible a la presión.",
        precio: 379.99,
        stock: 20
    },
    {
        id: 36,
        nombre: "Kit de Ventiladores para PC Cooler Master",
        imagen: "./img/kit_ventiladores_cooler_master.jpg",
        descripcion: "Conjunto de ventiladores RGB para mejorar la ventilación y estética de tu PC.",
        precio: 59.99,
        stock: 15
    },
    {
        id: 37,
        nombre: "Sistema de Audio Logitech Z623",
        imagen: "./img/audio_logitech_z623.jpg",
        descripcion: "Sistema de altavoces 2.1 con sonido potente y subwoofer para una experiencia de audio envolvente.",
        precio: 149.99,
        stock: 30
    },
    {
        id: 38,
        nombre: "Mousepad Gigante RGB",
        imagen: "./img/mousepad_rgb.jpg",
        descripcion: "Mousepad amplio con iluminación RGB personalizable y superficie suave.",
        precio: 39.99,
        stock: 15
    },
    {
        id: 39,
        nombre: "Adaptador de Red WiFi PCIe",
        imagen: "./img/adaptador_wifi_pcie.jpg",
        descripcion: "Tarjeta de red WiFi 6 para PC de escritorio con alta velocidad y cobertura.",
        precio: 59.99,
        stock: 10
    },
    {
        id: 40,
        nombre: "Estación de Docking USB-C",
        imagen: "./img/docking_usb_c.jpg",
        descripcion: "Estación de acoplamiento con múltiples puertos para conectar tu laptop fácilmente.",
        precio: 129.99,
        stock: 25
    },
    {
        id: 41,
        nombre: "Memoria RAM Kingston HyperX Fury 32GB",
        imagen: "./img/ram_kingston_hyperx_32gb.jpg",
        descripcion: "Kit de memoria RAM DDR4 de 32GB para un rendimiento superior en multitarea.",
        precio: 149.99,
        stock: 20
    },
    {
        id: 42,
        nombre: "Cargador inalámbrico Qi Anker",
        imagen: "./img/cargador_inalambrico_anker.jpg",
        descripcion: "Cargador inalámbrico compatible con dispositivos Qi para una carga conveniente.",
        precio: 29.99,
        stock: 15
    },
    {
        id: 43,
        nombre: "Auriculares Gaming HyperX Cloud II",
        imagen: "./img/auriculares_hyperx_cloud_ii.jpg",
        descripcion: "Auriculares gaming con sonido envolvente 7.1 y micrófono retráctil.",
        precio: 99.99,
        stock: 10
    },
    {
        id: 44,
        nombre: "Sistema Operativo Windows 11 Pro",
        imagen: "./img/windows_11_pro.jpg",
        descripcion: "Licencia oficial de Windows 11 Pro para actualizar tu sistema operativo.",
        precio: 199.99,
        stock: 15
    },
    {
        id: 45,
        nombre: "Memoria RAM G.Skill Trident Z RGB 16GB",
        imagen: "./img/ram_gskill_trident_z_rgb.jpg",
        descripcion: "Memoria RAM DDR4 con iluminación RGB para un setup elegante y potente.",
        precio: 89.99,
        stock: 25
    },
    {
        id: 46,
        nombre: "Unidad de Almacenamiento NVMe Samsung 970 EVO Plus 1TB",
        imagen: "./img/nvme_samsung_970_evo_plus.jpg",
        descripcion: "SSD NVMe de alta velocidad para cargas rápidas y transferencia de datos eficiente.",
        precio: 169.99,
        stock: 20
    },
    {
        id: 47,
        nombre: "Monitor Gaming ASUS TUF Gaming VG27AQ",
        imagen: "./img/monitor_asus_tuf_gaming_vg27aq.jpg",
        descripcion: "Monitor gaming de 27\" con tasa de refresco de 165Hz y resolución QHD.",
        precio: 399.99,
        stock: 20
    },
    {
        id: 48,
        nombre: "Ratón Gaming Razer DeathAdder V2",
        imagen: "./img/raton_razer_deathadder_v2.jpg",
        descripcion: "Ratón gaming con sensor óptico de alta precisión y diseño ergonómico.",
        precio: 69.99,
        stock: 10
    },
    {
        id: 49,
        nombre: "Altavoz Bluetooth JBL Charge 5",
        imagen: "./img/altavoz_jbl_charge_5.jpg",
        descripcion: "Altavoz portátil Bluetooth con excelente calidad de sonido y resistencia al agua.",
        precio: 179.99,
        stock: 20
    },
    {
        id: 50,
        nombre: "Kit de Discos Duros Internos Western Digital",
        imagen: "./img/discos_duros_wd.jpg",
        descripcion: "Conjunto de discos duros internos de alta capacidad para expandir el almacenamiento de tu PC.",
        precio: 249.99,
        stock: 10
    }
];
