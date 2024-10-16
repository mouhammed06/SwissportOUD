document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Populate services
    const services = [
        "Assistance passagers",
        "Manutention des bagages",
        "Fret aérien",
        "Maintenance des avions"
    ];

    const servicesGrid = document.getElementById('services-grid');
    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'flex flex-col items-center text-center';
        serviceElement.innerHTML = `
            <div class="rounded-full bg-muted p-4">
                <i data-lucide="plane" class="h-6