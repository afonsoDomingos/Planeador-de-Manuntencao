// Mock Data Service for Planeador Inteligente de Manutenção

const ASSETS = [
  { id: 'AST-001', name: 'Turbina de Compressão A1', category: 'Energia', criticality: 'Alta', status: 'Healthy', healthScore: 94, sensorData: { temp: 42, vib: 0.12, press: 12.5 }, lastMaintenance: '2024-01-15' },
  { id: 'AST-002', name: 'Bomba Hidráulica B2', category: 'Fluid Management', criticality: 'Média', status: 'Warning', healthScore: 78, sensorData: { temp: 68, vib: 0.45, press: 8.2 }, lastMaintenance: '2023-11-20' },
  { id: 'AST-003', name: 'Correia Transportadora C1', category: 'Logística', criticality: 'Alta', status: 'Critical', healthScore: 42, sensorData: { temp: 85, vib: 1.2, press: 0 }, lastMaintenance: '2023-10-05' },
  { id: 'AST-004', name: 'Motor de Indução M4', category: 'Mecânica', criticality: 'Média', status: 'Healthy', healthScore: 89, sensorData: { temp: 35, vib: 0.08, press: 5.1 }, lastMaintenance: '2024-02-01' },
  { id: 'AST-005', name: 'Gerador Estacionário G1', category: 'Backup', criticality: 'Crítica', status: 'Healthy', healthScore: 91, sensorData: { temp: 40, vib: 0.15, press: 10.0 }, lastMaintenance: '2024-01-10' },
];

const MAINTENANCE_HISTORY = [
  { id: 'MT-101', assetId: 'AST-001', type: 'Preventiva', date: '2024-01-15', engineer: 'João Silva', cost: 1200, pieces: ['Filtros', 'Óleo'] },
  { id: 'MT-102', assetId: 'AST-003', type: 'Corretiva', date: '2024-01-28', engineer: 'Maria Costa', cost: 4500, pieces: ['Rolo', 'Rolamentos'] },
  { id: 'MT-103', assetId: 'AST-002', type: 'Preditiva', date: '2023-12-05', engineer: 'Pedro Santos', cost: 800, pieces: ['Sensor de Vibração'] },
];

export const dataService = {
  getAssets: () => ASSETS,
  getHistory: () => MAINTENANCE_HISTORY,
  getAssetById: (id) => ASSETS.find(a => a.id === id),

  getKPIs: () => {
    return {
      mtbf: 420, // Horas
      mttr: 12, // Horas
      failureRate: 2.4, // %
      activeMaintenance: 3,
      totalAssets: ASSETS.length,
      criticalAssets: ASSETS.filter(a => a.status === 'Critical').length
    };
  },

  calculateRUL: (asset) => {
    // Simulated prediction logic
    const { temp, vib } = asset.sensorData;
    let baseLife = 10000;
    let penalty = (temp - 40) * 10 + (vib * 500);
    let remaining = Math.max(0, baseLife - penalty - (Math.random() * 500));
    return Math.round(remaining / 24);
  },

  optimizePlan: () => {
    // Logic to re-prioritize assets based on risk (100 - healthScore) * criticality weight
    const weights = { 'Crítica': 3, 'Alta': 2, 'Média': 1.5, 'Baixa': 1 };
    const optimized = ASSETS
      .map(asset => ({
        ...asset,
        riskScore: (100 - asset.healthScore) * (weights[asset.criticality] || 1)
      }))
      .sort((a, b) => b.riskScore - a.riskScore)
      .filter(a => a.healthScore < 85); // Only suggest maintenance for those below 85% health

    return optimized.map(a => ({
      assetId: a.id,
      assetName: a.name,
      suggestedDate: new Date(Date.now() + (dataService.calculateRUL(a) * 0.5 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0],
      priority: a.riskScore > 100 ? 'Urgente' : 'Normal',
      reason: `Saúde em ${a.healthScore}% com tendência de ${a.sensorData.vib > 0.5 ? 'vibração alta' : 'desgaste térmico'}.`
    }));
  }
};
