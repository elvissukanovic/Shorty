using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Threading;

namespace Shorty
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            Activated += MainWindow_Activated;
        }

        private void MainWindow_Activated(object sender, EventArgs e)
        {
            SetSearchFocus();
        }

        private void SetSearchFocus()
        {
            mainSearch.Focus();
            if (!mainSearch.Focus())
            {
                mainSearch.Dispatcher?.BeginInvoke(
                    DispatcherPriority.Input, new ThreadStart(delegate { mainSearch.Focus(); })
                );
            }
        }
    }
}
