// Initial Mock Data
const initialAssets = [
  { id: 'AST-001', name: 'Turbina de Compressão A1', criticality: 'Crítica', status: 'Saudável', healthScore: 92, lastMaintenance: '2023-10-15', vibration: 2.1, temp: 65 },
  { id: 'AST-002', name: 'Bomba Hidráulica B2', criticality: 'Alta', status: 'Saudável', healthScore: 88, lastMaintenance: '2023-11-02', vibration: 1.8, temp: 58 },
  { id: 'AST-003', name: 'Correia Transportadora C1', criticality: 'Média', status: 'Atenção', healthScore: 65, lastMaintenance: '2023-09-20', vibration: 4.5, temp: 72 },
  { id: 'AST-004', name: 'Motor de Indução M4', criticality: 'Baixa', status: 'Saudável', healthScore: 95, lastMaintenance: '2023-11-20', vibration: 0.5, temp: 45 },
  { id: 'AST-005', name: 'Gerador Estacionário G1', criticality: 'Crítica', status: 'Saudável', healthScore: 98, lastMaintenance: '2023-12-01', vibration: 1.2, temp: 60 },
];

class DataService {
  constructor() {
    let savedAssets = JSON.parse(localStorage.getItem('predictAI_assets'));

    if (savedAssets) {
      // Migrate English statuses to Portuguese if they exist
      savedAssets = savedAssets.map(a => {
        if (a.status === 'Healthy') a.status = 'Saudável';
        if (a.status === 'Warning') a.status = 'Atenção';
        if (a.status === 'Critical') a.status = 'Crítico';
        return a;
      });
      this.assets = savedAssets;
    } else {
      this.assets = initialAssets;
    }

    this.maintenancePlan = JSON.parse(localStorage.getItem('predictAI_plan')) || [];
  }

  save() {
    localStorage.setItem('predictAI_assets', JSON.stringify(this.assets));
    localStorage.setItem('predictAI_plan', JSON.stringify(this.maintenancePlan));
  }

  getAssets(filterText = '') {
    if (!filterText) return this.assets;
    const lower = filterText.toLowerCase();
    return this.assets.filter(a =>
      a.name.toLowerCase().includes(lower) ||
      a.id.toLowerCase().includes(lower) ||
      a.status.toLowerCase().includes(lower)
    );
  }

  addAsset(asset) {
    this.assets.push(asset);
    this.save();
  }

  updateAsset(id, updatedData) {
    const index = this.assets.findIndex(a => a.id === id);
    if (index !== -1) {
      this.assets[index] = { ...this.assets[index], ...updatedData };
      this.save();
      return true;
    }
    return false;
  }

  deleteAsset(id) {
    const index = this.assets.findIndex(a => a.id === id);
    if (index !== -1) {
      this.assets.splice(index, 1);
      this.save();
      return true;
    }
    return false;
  }

  getKPIs() {
    const totalAssets = this.assets.length;
    const criticalAssets = this.assets.filter(a => a.healthScore < 70).length;

    // Simulate dynamic calculations based on current data
    const mtbf = Math.round(this.assets.reduce((acc, curr) => acc + curr.healthScore * 5, 0) / totalAssets);
    const mttr = Math.round(1500 / mtbf);

    return {
      mtbf,
      mttr,
      criticalAssets,
      availability: ((1 - (criticalAssets / totalAssets)) * 100).toFixed(1)
    };
  }

  calculateRUL(asset) {
    // Advanced RUL calculation simulation
    // Formula: Base life (1000 days) * (Health Score / 100) * Environment Factor - Random Noise
    const baseLife = 1000;
    const degradation = (100 - (asset.healthScore || 100)) * 5;
    const rul = Math.max(0, Math.round((baseLife * ((asset.healthScore || 100) / 100)) - degradation));
    return rul;
  }

  simulateDegradation() {
    this.assets = this.assets.map(asset => {
      // Random chance (40%) for an asset to degrade
      if (Math.random() > 0.6) {
        const drop = Math.floor(Math.random() * 5) + 1; // Drop 1-5 points
        let newHealth = (asset.healthScore || 100) - drop;
        if (newHealth < 0) newHealth = 0;

        // Update status based on new health
        let newStatus = 'Saudável';
        if (newHealth < 50) newStatus = 'Crítico';
        else if (newHealth < 80) newStatus = 'Atenção';

        return { ...asset, healthScore: newHealth, status: newStatus };
      }
      return asset;
    });
    this.save();
    return this.assets;
  }

  optimizePlan() {
    // Identify risks
    const risks = this.assets.filter(a => a.healthScore < 85);

    return risks.map(asset => {
      const rul = this.calculateRUL(asset);
      const urgency = rul < 30 ? 'Urgente' : 'Alta';
      const daysUntilIntervention = Math.max(1, Math.floor(rul * 0.2));

      const suggestedDate = new Date();
      suggestedDate.setDate(suggestedDate.getDate() + daysUntilIntervention);

      return {
        assetId: asset.id,
        assetName: asset.name,
        currentHealth: asset.healthScore,
        priority: urgency,
        suggestedDate: suggestedDate.toLocaleDateString('pt-PT'),
        reason: `RUL projetada de ${rul} dias. Padrão de degradação acelerado.`
      };
    }).sort((a, b) => (a.priority === 'Urgente' ? -1 : 1));
  }
}

export const dataService = new DataService();
